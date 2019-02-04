import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuOpen = false;

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
  }

  onShowMenu() {
    this.menuOpen = !this.menuOpen;
  }

  triggerScrollTo(target) {
    this.scrollService.triggerScrollTo(target);
  }

}
