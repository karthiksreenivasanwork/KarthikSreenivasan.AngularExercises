import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-mponehome',
  templateUrl: './mponehome.component.html',
  styleUrls: ['./mponehome.component.scss'],
})
export class MponehomeComponent implements OnInit {
  dropdownDataFilterCriteria: string = '';
  inputSearchValue: string = '';

  searchColumnCollection = new Map<string, string>();
  /**
   * The Subject concept is implemented to emit the event from the parent 
   * to the child component.
   */
  eventSubject: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.searchColumnCollection.set('name', 'Name');
    this.searchColumnCollection.set('price', 'Price');
    this.searchColumnCollection.set('cardnumber', 'Card Number');
  }

  onSelectionValueChanged() {
    //Emit the event to the child
    this.eventSubject.next();
  }

  onInputSearchKeyUp() {
    //Emit the event to the child
    this.eventSubject.next();
  }
}
