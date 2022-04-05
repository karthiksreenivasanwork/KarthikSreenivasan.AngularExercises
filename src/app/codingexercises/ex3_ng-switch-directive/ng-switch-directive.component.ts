import { Component, OnInit } from '@angular/core';

/**
 * Ex# 3: ngSwitch Directive
 * Dashboard that mocks displaying various socal media links based on the Social media company selected by the user.
 */
@Component({
  selector: 'app-ng-switch-directive',
  templateUrl: './ng-switch-directive.component.html',
  styleUrls: ['./ng-switch-directive.component.scss']
})
export class NgSwitchDirectiveComponent implements OnInit {

  dropDownData: string = "";
  contactCollection = new Map<string, string>();

  constructor() {
    this.contactCollection.set("youtube", "YouTube Channel");
    this.contactCollection.set("twitter", "Twitter Handle");
    this.contactCollection.set("facebook", "Facebook");
    this.contactCollection.set("instagram", "Instagram");

    /**
     * Get the first element from the map
     * https://stackoverflow.com/questions/32373301/first-item-from-a-map-on-javascript-es2015
     */
    //this.dropDownData = this.contactCollection.entries().next().value[0];
  }

  ngOnInit(): void {
  }
}
