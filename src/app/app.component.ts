import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  // newStyle = {
  //   'background-size': '500%'
  // }

  constructor(private el: ElementRef) {
  }

  @ViewChild("maincont", {read: ElementRef}) maincont: ElementRef

  @HostListener('scroll', ['$event']) 
  scrollHandler($event) {
    //let element = $event.target.all[15];
    console.log($event.target.scrollTop);
    let newSize = (500 - $event.target.scrollTop * 0.205);
    console.log(newSize);
    // this.newStyle["background-size"] = '"auto ' +  newSize + '%"';
    let size = 'background-size: auto ' +  newSize + '%';
    this.maincont.nativeElement.setAttribute('style', size);
  }


}
