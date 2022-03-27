import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { IPaymentDetails } from '../../models/paymentdetails';
import { MponeuserService } from '../../mponeservice/mponeuser.service';
import { CardNumberHelper } from '../../mponeutils/cardnumberhelper';
import { PaymentValidation } from '../../validation/paymentvalidation';

@Component({
  selector: 'app-mponeaddpayment',
  templateUrl: './mponeaddpayment.component.html',
  styleUrls: ['./mponeaddpayment.component.scss'],
})
export class MponeaddpaymentComponent implements OnInit {
  //2 way data binding
  _inputName: string = 'saravanan';
  _inputPrice: number = 2500;
  _inputCardNumber: string = '4557-2755-4689-3321';
  errorMessage: string = '';

  modelPopupStatus: boolean = false;

  constructor(
    public userService: MponeuserService,
    public matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userService.onPaymentEditedEvent.subscribe(
      (paymentDataToEdit: IPaymentDetails) => {
        this.onOpenDialog(paymentDataToEdit);
      }
    );
  }

  onAddPaymentClick() {
    try {
      if (
        PaymentValidation.validate(
          this._inputName,
          this._inputPrice.toString(),
          this._inputCardNumber //Data returned from the UI as it is to validate.
        )
      ) {
        if (
          //Format data to save without any text formatting.
          this.userService.addPaymentDetails(
            this._inputName,
            this._inputPrice,
            Number(
              CardNumberHelper.removeCardNumberWithHyphens(
                this._inputCardNumber
              )
            )
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

  clearData() {
    this._inputName = '';
    this._inputPrice = 0;
    this._inputCardNumber = '0';
    this.errorMessage = '';
  }

  onOpenDialog(paymentDetailsToEdit: IPaymentDetails) {
    const dialogRef = this.matDialog.open(MponeaddpaymentDialogComponent, {
      width: 'auto',
      data: paymentDetailsToEdit,
    });

    dialogRef.afterClosed().subscribe(() => {
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
    @Inject(MAT_DIALOG_DATA) public paymentDetailsToEdit: IPaymentDetails
  ) {
    super(userService, matDialog);

    this._position = paymentDetailsToEdit.position;
    this._inputName = paymentDetailsToEdit.name;
    this._inputPrice = paymentDetailsToEdit.price;
    this._inputCardNumber = CardNumberHelper.getCardNumberWithHyphens(
      paymentDetailsToEdit.cardnumber.toString()
    );
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
      Number(
        CardNumberHelper.removeCardNumberWithHyphens(this._inputCardNumber)
      )
    );
    this.dialogRef.close();
  }
}
