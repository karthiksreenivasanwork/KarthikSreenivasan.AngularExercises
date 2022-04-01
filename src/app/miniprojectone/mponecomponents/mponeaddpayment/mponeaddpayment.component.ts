import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { IPaymentDetails } from '../../models/ipaymentdetails';
import { MponeuserService } from '../../mponeservice/mponeuser.service';
import { CardNumberHelper } from '../../mponeutils/cardnumberhelper';

@Component({
  selector: 'app-mponeaddpayment',
  templateUrl: './mponeaddpayment.component.html',
  styleUrls: ['./mponeaddpayment.component.scss'],
})
export class MponeaddpaymentComponent implements OnInit, AfterViewInit {
  /**
   * Defined only for model to view data binding for performing updates.
   */
  inputEditName: string = '';
  inputEditPrice: number = 0;
  inputEditCardNumber: string = '';

  errorMessage: string = '';

  modelPopupStatus: boolean = false;

  constructor(
    public userService: MponeuserService,
    public matDialog: MatDialog
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.userService.onPaymentEditedEvent.subscribe(
      (paymentDataToEdit: IPaymentDetails) => {
        this.onOpenDialog(paymentDataToEdit);
      }
    );
  }

  frmGetPaymentData(formValue: NgForm) {
    console.log('Form Submitted');
    console.log(formValue.value);

    if (
      //Format data to save without any text formatting.
      this.userService.addPaymentDetails(
        formValue.value.nameField,
        formValue.value.priceField,
        CardNumberHelper.removeCardNumberWithHyphens(
          formValue.value.cardNumberField
        )
      )
    ) {
      formValue.resetForm();
    }
  }

  onClearClick(formValue: NgForm) {
    formValue.resetForm();
  }

  clearData() {
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
  implements OnInit, AfterViewInit
{
  _position: number = 0;

  constructor(
    public override userService: MponeuserService,
    public override matDialog: MatDialog,
    public dialogRef: MatDialogRef<MponeaddpaymentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public paymentDetailsToEdit: IPaymentDetails
  ) {
    super(userService, matDialog);
  }

  override ngAfterViewInit(): void {
    this._position = this.paymentDetailsToEdit.position;
    this.inputEditName = this.paymentDetailsToEdit.name;
    this.inputEditPrice = this.paymentDetailsToEdit.price;
    this.inputEditCardNumber = CardNumberHelper.getCardNumberWithHyphens(
      this.paymentDetailsToEdit.cardnumber.toString()
    );
  }

  override ngOnInit(): void {
    //Change the buttons to update instead of add when the dialog is opened.
    this.dialogRef.afterOpened().subscribe((openResult) => {
      this.modelPopupStatus = true;
    });
  }

  override frmGetPaymentData(formValue: NgForm) {
    this.userService.updatePaymentDetails(
      this._position,
      formValue.value.nameField,
      formValue.value.priceField,
      CardNumberHelper.removeCardNumberWithHyphens(
        formValue.value.cardNumberField
      )
    );
    this.dialogRef.close();
  }
}
