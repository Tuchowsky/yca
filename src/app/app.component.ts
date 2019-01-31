import { Component, HostListener, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  private screenHeight: number;
  private screenTotalHeight: number;
  private sectionsCount: number;
  private onePercentOfScreenHeight: number;

  constructor(private el: ElementRef) {
    this.getScreenSize();
  }

  @ViewChild("maincont", {read: ElementRef}) maincont: ElementRef

  @HostListener('scroll', ['$event']) 
  @HostListener('window:resize', ['$event'])

  scrollHandler($event) {
    let newSize = (500 - $event.target.scrollTop * this.onePercentOfScreenHeight);
    let size = 'background-size: auto ' +  newSize + '%';
    this.maincont.nativeElement.setAttribute('style', size);
  }

  onResize($event?) {
    console.log($event.target.innerHeight);
    this.screenHeight = $event.target.innerHeight;
    this.screenTotalHeight = this.screenHeight*3;
    this.onePercentOfScreenHeight = this.sectionsCount/this.screenTotalHeight;
  }

  getScreenSize(event?) {
    console.log(window.innerHeight);
    this.screenHeight = window.innerHeight;
    this.screenTotalHeight = this.screenHeight*3;
    this.sectionsCount = 4*100;
    this.onePercentOfScreenHeight = this.sectionsCount/this.screenTotalHeight;
  }


  ngOnInit(): void {
    
  }

}
