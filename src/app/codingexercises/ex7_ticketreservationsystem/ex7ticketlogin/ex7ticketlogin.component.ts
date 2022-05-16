import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const MOBILE_NUMBER_EMPTY_ERROR = 'Mobile number cannot be empty';
const MOBILE_NUMBER_PATTERN_ERROR = 'Mobile number has to be exactly 10 digits';

const OTP_EMPTY_ERROR = 'OTP cannot be empty';
const OTP_PATTERN_ERROR = 'OTP has to be exactly 4 digits';

const OTP: number = 9958;

@Component({
  selector: 'app-ex7ticketlogin',
  templateUrl: './ex7ticketlogin.component.html',
  styleUrls: ['./ex7ticketlogin.component.scss'],
})
export class Ex7ticketloginComponent implements OnInit {
  mobileNumber: number = 0;

  isOTPVerified: boolean = false;
  otpValidationInProgress: boolean = false;

  mobileInputForm: FormGroup;
  otpInputForm: FormGroup;

  userMessage: string;

  constructor() {
    this.userMessage = MOBILE_NUMBER_EMPTY_ERROR;
  }

  ngOnInit(): void {
    this.mobileInputForm = new FormGroup({
      mobilenumber: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(`^[0-9]{10,10}$`),
        ])
      ),
    });
    this.otpInputForm = new FormGroup({
      otp: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(`^[0-9]{4,4}$`),
        ])
      ),
    });
  }

  onMobileNumberSubmitted() {
    this.isOTPVerified = false;
    this.otpValidationInProgress = true;

    if (this.mobileInputForm.invalid) {
      this.displayValidationErrorsForMobileNumber();
    } else {
      this.otpValidationInProgress = true;
      this.userMessage = `Please enter OTP: ${OTP}`;
    }
  }

  onOtpSubmitted() {
    this.isOTPVerified = false;
    this.otpValidationInProgress = true;

    this.displayValidationErrorsForOtp();
    if (this.otpInputForm.get('otp').value == OTP) {
      this.userMessage = 'OTP Verified. Please add passenger details';
      this.isOTPVerified = true;
      this.otpValidationInProgress = false;
      this.otpInputForm.setValue({ otp: '' });
    }
  }

  displayValidationErrorsForMobileNumber() {
    if (this.mobileInputForm.invalid) {
      if (this.mobileInputForm.get('mobilenumber').errors?.['required'])
        this.userMessage = MOBILE_NUMBER_EMPTY_ERROR;
      else if (this.mobileInputForm.get('mobilenumber').errors?.['pattern']) {
        this.userMessage = MOBILE_NUMBER_PATTERN_ERROR;
      }
    }
  }

  displayValidationErrorsForOtp() {
    if (this.otpInputForm.invalid) {
      if (this.otpInputForm.get('otp').errors?.['required'])
        this.userMessage = OTP_EMPTY_ERROR;
      else if (this.otpInputForm.get('otp').errors?.['pattern']) {
        this.userMessage = OTP_PATTERN_ERROR;
      } else if (this.otpInputForm.get('otp').value != OTP) {
        this.userMessage = 'Invalid OTP';
      }
    }
  }
}
