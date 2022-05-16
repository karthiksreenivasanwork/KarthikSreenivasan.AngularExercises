import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface IPassengerDetails {
  PassengerName: string;
  PassengerAge: number;
}

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
  ticketDetailsOfConfirmedPassengers: IPassengerDetails[] = [];

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.passengerInputForm = this.formBuilder.group({
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
    //Clears all the child FormGroup collection created by the FormBuilder.
    (<FormArray>this.passengerInputForm.get('passengerControls')).clear();
    this.ticketDetailsOfConfirmedPassengers = [];
  }

  /**
   * Returns the collection of controls added dynamically for adding passenger details.
   */
  get passengerFormGroupCollection(): FormGroup[] {
    return (<FormArray>this.passengerInputForm.get('passengerControls'))
      .controls as FormGroup[];
  }

  /**
   * Button event that is fired when a new passenger is added.
   */
  onPassengerAddClick() {
    this.errorMessage = '';
    if (this.passengerFormGroupCollection.length <= 2) {
      (<FormArray>this.passengerInputForm.get('passengerControls')).push(
        this.formBuilder.group({
          dynPassengerName: ['', Validators.required],
          dynAge: ['', Validators.required],
        })
      );
    }
    if (this.passengerFormGroupCollection.length == 3)
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

      (this.passengerInputForm.value['passengerControls'] as any[]).forEach(
        (formGroupData) => {
          let passengerInformation: IPassengerDetails = {
            PassengerName: formGroupData['dynPassengerName'],
            PassengerAge: formGroupData['dynAge'],
          };
          this.ticketDetailsOfConfirmedPassengers.push(passengerInformation);
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
   * @param dynamicFormGroup Each child FormGroup reference holding the name and the age textbox controls.
   */
  onDynamicPassengerTextboxBlurEvent(dynamicFormGroup: FormGroup) {
    this.errorMessage = '';
    if (dynamicFormGroup.invalid)
      this.errorMessage = 'Please provide one more more passenger details';
  }
}
