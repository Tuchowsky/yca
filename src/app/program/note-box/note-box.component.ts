import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-note-box',
  templateUrl: './note-box.component.html',
  styleUrls: ['./note-box.component.scss'],
  providers: []
})
export class NoteBoxComponent implements OnInit {

  @Input() note: [];


  constructor() { }

  
  ngOnInit() {
    console.log(this.note);
  }

}
