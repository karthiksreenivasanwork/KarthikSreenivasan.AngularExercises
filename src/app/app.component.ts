import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CredozAngularExercises';

  ngOnInit(): void {
    this.setDynamicBodyContainerHeight();
    window.onresize = this.setDynamicBodyContainerHeight;
  }

  /**
   * Adjust the height of the div container dynamically based on the screen size.
   */
  setDynamicBodyContainerHeight() {
    let windowHeightToReduce = 12.5; //
    document.getElementById('applicationBodyContainer').style.height = `${
      (window.innerHeight - window.innerHeight / windowHeightToReduce)
    }px`;
  }
}
