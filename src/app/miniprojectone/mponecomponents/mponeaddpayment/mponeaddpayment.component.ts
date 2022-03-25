import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { PaymentDetails } from '../../models/paymentdetails';
import { MponeuserService } from '../../mponeservice/mponeuser.service';
import { PaymentValidation } from '../../validation/paymentvalidation';

@Component({
  selector: 'app-mponeaddpayment',
  templateUrl: './mponeaddpayment.component.html',
  styleUrls: ['./mponeaddpayment.component.scss'],
})
export class MponeaddpaymentComponent implements OnInit {
  //2 way data binding
  _inputName: string = 'Karthik';
  _inputPrice: number = 2000;
  _inputCardNumber: number = 4557275546893321;

  modelPopupStatus: boolean = false;

  errorMessage: string = '';

  constructor(
    public userService: MponeuserService,
    public matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userService.onPaymentEditedEvent.subscribe(
      (paymentDataToEdit: PaymentDetails) => {
        this.onOpenDialog(paymentDataToEdit);
      }
    );
  }

  onAddPaymentClick() {
    let paymentdetails = this.getUserInput();

    try {
      if (PaymentValidation.validate(paymentdetails)) {
        if (
          this.userService.addPaymentDetails(
            this._inputName,
            this._inputPrice,
            this._inputCardNumber
          )
        ) {
          this.clearData();
        }
      } else {
        this.errorMessage = PaymentValidation.ValidationError;
      }
    } catch (exceptionRef) {
      if (exceptionRef instanceof Error) {
        console.log(exceptionRef.message);
      }
    }
  }

  onClearClick() {
    this.clearData();
  }

  /**
   * This will be implemented by the derived class that extends as a dialog component.
   */
  onUpdateClick() {}

  getUserInput(): PaymentDetails {
    return {
      position: 0, //Just a dummy value
      name: this._inputName,
      price: this._inputPrice,
      cardnumber: this._inputCardNumber,
    };
  }

  clearData() {
    this._inputName = '';
    this._inputPrice = 0;
    this._inputCardNumber = 0;
    this.errorMessage = '';
  }

  onOpenDialog(paymentDetailsToEdit: PaymentDetails) {
    const dialogRef = this.matDialog.open(MponeaddpaymentDialogComponent, {
      width: 'auto',
      data: paymentDetailsToEdit,
    });

    dialogRef.afterClosed().subscribe((closeResult) => {
      this.modelPopupStatus = false;
    });
  }
}

/**
 *
 */
@Component({
  selector: 'app-mponeaddpayment-dialog',
  templateUrl: './mponeaddpayment.component.html',
  styleUrls: ['./mponeaddpayment.component.scss'],
})
export class MponeaddpaymentDialogComponent
  extends MponeaddpaymentComponent
  implements OnInit
{
  _position: number = 0;

  constructor(
    public override userService: MponeuserService,
    public override matDialog: MatDialog,
    public dialogRef: MatDialogRef<MponeaddpaymentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public paymentDetailsToEdit: PaymentDetails
  ) {
    super(userService, matDialog);

    this._position = paymentDetailsToEdit.position;
    this._inputName = paymentDetailsToEdit.name;
    this._inputPrice = paymentDetailsToEdit.price;
    this._inputCardNumber = paymentDetailsToEdit.cardnumber;
  }

  override ngOnInit(): void {
    //Change the buttons to update instead of add when the dialog is opened.
    this.dialogRef.afterOpened().subscribe((openResult) => {
      this.modelPopupStatus = true;
    });
  }

  override onUpdateClick(): void {
    this.userService.updatePaymentDetails(
      this._position,
      this._inputName,
      this._inputPrice,
      this._inputCardNumber
    );
    this.dialogRef.close();
  }
}
