import { Component, OnInit } from '@angular/core';
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
  _inputName: string = '';
  _inputPrice: number = 0;
  _inputCardNumber: number = 0;

  errorMessage: string = '';

  constructor(public userService: MponeuserService) {}

  ngOnInit(): void {}

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
  }
}
