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

  constructor(public mponeuserService: MponeuserService) {
    this._paymentCollectionObservable = this.mponeuserService.getAllPayments();
  }

  ngOnInit(): void {
    this._paymentCollectionObservable
      .subscribe((updatedProductCollection: PaymentDetails[]) => {
        this.datasource.data = updatedProductCollection;
      });
  }

  ngOnDestroy(): void {
    //To avoid memory leaks.
    this._paymentCollectionObservable.unsubscribe();
  }

  onedit() {}

  ondelete() {}
}
