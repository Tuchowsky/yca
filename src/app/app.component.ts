import { Component, HostListener } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor() {
  }

  @HostListener('scroll', ['$event']) 
  scrollHandler($event) {
    //let element = $event.target.all[15];
    console.log($event);
  }


}
