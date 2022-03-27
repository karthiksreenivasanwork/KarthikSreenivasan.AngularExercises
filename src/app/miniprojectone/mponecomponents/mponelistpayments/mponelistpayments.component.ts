import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';

import { IPaymentDetails } from '../../models/paymentdetails';
import { FilterListPayments } from '../../mponeutils/mponefilterlistpayments';
import { MponeuserService } from '../../mponeservice/mponeuser.service';

const LABEL_PAYMENT_COUNT: string = 'Payment Count';
const LABEL_FILTERED_COUNT: string = 'Filtered Count';

@Component({
  selector: 'app-mponelistpayments',
  templateUrl: './mponelistpayments.component.html',
  styleUrls: ['./mponelistpayments.component.scss'],
})
export class MponelistpaymentsComponent implements OnInit, OnDestroy {
  dropDownData: string = '';
  searchValue: string = '';
  errorMessage: string = '';
  labelToDisplayVisiblePaymentDataCount: string = '';

  isPaymentDataFiltered: boolean = false;
  hasNoRecords : boolean = false;

  searchColumnCollection = new Map<string, string>();
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
  datasource = new MatTableDataSource<IPaymentDetails>();
  _paymentCollectionObservable = new Subject<IPaymentDetails[]>();

  /**
   * Initialize
   * @param mponeuserService User service that is being injected via Dependency injection.
   */
  constructor(public mponeuserService: MponeuserService) {
    this._paymentCollectionObservable = this.mponeuserService.getAllPayments();

    this.searchColumnCollection.set('name', 'Name');
    this.searchColumnCollection.set('price', 'Price');
    this.searchColumnCollection.set('cardnumber', 'Card Number');

    this.labelToDisplayVisiblePaymentDataCount = LABEL_PAYMENT_COUNT;
  }

  ngOnInit(): void {
    this._paymentCollectionObservable.subscribe(
      //Fires everytime a new record is added rebind to the grid.
      (updatedProductCollection: IPaymentDetails[]) => {
        this.datasource.data = updatedProductCollection;
      }
    );

    //Add default payment data.
    this.mponeuserService.addPaymentDetails('Karthik', 2000, 4558758965115248);
    this.mponeuserService.addPaymentDetails('Krishna', 3000, 4668758965115675);
    this.mponeuserService.addPaymentDetails('Ram', 3500, 3888758965115999);
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
    let paymentDetailsToEdit: IPaymentDetails = {
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

  onInputSearchKeyUp() {
    this.updateSearchDetails();
  }

  onSelectionValueChanged() {
    this.updateSearchDetails();
  }

  updateSearchDetails() {
    this.isPaymentDataFiltered = false;
    this.hasNoRecords = false;
    this.errorMessage = '';
    this.labelToDisplayVisiblePaymentDataCount = LABEL_PAYMENT_COUNT;

    if (
      this.datasource.data.length > 0 &&
      this.dropDownData.length > 0 &&
      this.searchValue.length > 0
    ) {
      this.isPaymentDataFiltered = true;
      this.labelToDisplayVisiblePaymentDataCount = LABEL_FILTERED_COUNT;

      let filteredData: IPaymentDetails[] = [];
      filteredData = FilterListPayments.applyFilter(
        this.datasource.data,
        this.dropDownData,
        this.searchValue
      );

      if (filteredData.length == 0) {
        this.hasNoRecords = true;
        this.errorMessage = 'No records found';
      }
    }
  }
}
