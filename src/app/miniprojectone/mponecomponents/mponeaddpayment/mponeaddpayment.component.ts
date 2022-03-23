import { Component, OnInit } from '@angular/core';
import { MponeuserService } from '../../mponeservice/mponeuser.service';

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
    if (
      this.userService.addPaymentDetails(
        this._inputName,
        this._inputPrice,
        this._inputCardNumber
      )
    ) {
      this.clearData();
    }
  }

  clearData() {
    this._inputName = '';
    this._inputPrice = 0;
    this._inputCardNumber = 0;
  }
}
