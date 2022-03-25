import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { PaymentDetails } from '../../models/paymentdetails';
import { MponeuserService } from '../../mponeservice/mponeuser.service';

@Component({
  selector: 'app-mponelistpayments',
  templateUrl: './mponelistpayments.component.html',
  styleUrls: ['./mponelistpayments.component.scss'],
})
export class MponelistpaymentsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'position',
    'name',
    'price',
    'cardnumber',
    'operations',
  ];

  /**
   * MatTableDataSource is required to update the mat table when the data source has been updated.
   * https://stackoverflow.com/questions/46746598/angular-material-how-to-refresh-a-data-source-mat-table
   */
  datasource = new MatTableDataSource<PaymentDetails>();
  _paymentCollectionObservable = new Subject<PaymentDetails[]>();

  /**
   * Initialize
   * @param mponeuserService User service that is being injected via Dependency injection.
   */
  constructor(public mponeuserService: MponeuserService) {
    this._paymentCollectionObservable = this.mponeuserService.getAllPayments();
  }

  ngOnInit(): void {
    this._paymentCollectionObservable.subscribe(
      //Fires everytime a new record is added rebind to the grid.
      (updatedProductCollection: PaymentDetails[]) => {
        this.datasource.data = updatedProductCollection;
      }
    );
  }

  /**
   * Event handled when the component is destoryed.
   */
  ngOnDestroy(): void {
    //To avoid memory leaks.
    this._paymentCollectionObservable.unsubscribe();
  }

  /**
   * Event handler when edit button is clicked in the data grid.
   * @param paramPosition Item index of the record to be edited.
   * @param paramName Name information
   * @param paramPrice Price information
   * @param paramCardnumber Card information
   */
  onEditClick(
    paramPosition: number,
    paramName: string,
    paramPrice: number,
    paramCardnumber: number
  ) {
    let paymentDetailsToEdit: PaymentDetails = {
      position: paramPosition,
      name: paramName,
      price: paramPrice,
      cardnumber: paramCardnumber,
    };
    this.mponeuserService.onPaymentEdited(paymentDetailsToEdit);
  }

  /**
   * Event handler when delete button is clicked in the data grid.
   * @param name Name information
   */
  onDeleteClick(name: string) {
    this.mponeuserService.removePaymentDetail(name);
  }
}
