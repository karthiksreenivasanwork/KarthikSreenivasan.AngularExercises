import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex7ticketlogin',
  templateUrl: './ex7ticketlogin.component.html',
  styleUrls: ['./ex7ticketlogin.component.scss'],
})
export class Ex7ticketloginComponent implements OnInit {
  mobileNumber: number = 0;
  isOTPVerified: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onMobileNumberSubmitted() {
    console.log(this.mobileNumber);
    this.isOTPVerified = true;
  }
}
