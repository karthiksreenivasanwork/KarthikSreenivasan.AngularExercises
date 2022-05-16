import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-ex7passengers',
  templateUrl: './ex7passengers.component.html',
  styleUrls: ['./ex7passengers.component.scss'],
})
export class Ex7passengersComponent implements OnInit {
  passengerInputForm: FormGroup;

  userMessage: string = '';
  errorMessage: string = '';

  bookingConfirmed: boolean;
  ticketDetailsOfConfirmedPassengers: string[] = [];

  ngOnInit(): void {
    this.passengerInputForm = new FormGroup({
      passengerControls: new FormArray([]),
    });
  }

  /**
   * Reset all the values of this component.
   */
  resetPage() {
    this.bookingConfirmed = false;
    this.userMessage = '';
    this.errorMessage = '';
    this.passengerInputForm.reset();
    (<FormArray>this.passengerInputForm.get('passengerControls')).clear();
    this.ticketDetailsOfConfirmedPassengers = [];
  }

  /**
   * Returns the collection of controls added dynamically for adding passenger details.
   */
  get getDynamicPassengerUIControls(): AbstractControl[] {
    return (<FormArray>this.passengerInputForm.get('passengerControls'))
      .controls;
  }

  /**
   * Button event that is fired when a new passenger is added.
   */
  onPassengerAddClick() {
    this.errorMessage = '';
    if (this.getDynamicPassengerUIControls.length <= 2) {
      let dynamicNameControl = new FormControl(null, Validators.required);
      (<FormArray>this.passengerInputForm.get('passengerControls')).push(
        dynamicNameControl
      );
    }
    if (this.getDynamicPassengerUIControls.length == 3)
      this.errorMessage = 'Booking limited to 3 passengers per ticket.';
  }

  /**
   * Button event that is fired when the customer confirms the booking.
   */
  onTicketBookingConfirmedClick() {
    this.bookingConfirmed = false;
    this.userMessage = '';
    this.errorMessage = '';

    if (this.passengerInputForm.valid) {
      this.userMessage = 'Reservation confirmed. Ticket details below.';
      this.bookingConfirmed = true;

      (this.passengerInputForm.value['passengerControls'] as string[]).forEach(
        (passengerName) => {
          this.ticketDetailsOfConfirmedPassengers.push(passengerName);
        }
      );
      this.passengerInputForm.reset();
    } else {
      this.errorMessage = 'Please provide one more more passenger details';
    }
  }

  /**
   * Button event that is fired when a new reservation in initiated.
   */
  onMakeNewReservationClick() {
    this.resetPage();
  }

  /**
   * Button event that is fired when a single passenger is removed
   */
  onPassengerRemovedClick(index: number) {
    this.errorMessage = '';
    (<FormArray>this.passengerInputForm.get('passengerControls')).removeAt(
      index
    );
    this.ticketDetailsOfConfirmedPassengers.splice(index, 1);
  }

  /**
   * Dynamic textbox event that is fired this control looses focus.
   */
  onDynamicPassengerTextboxBlurEvent() {
    this.errorMessage = '';
    if (this.passengerInputForm.invalid)
      this.errorMessage = 'Please provide one more more passenger details';
  }
}
