import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note-box',
  templateUrl: './note-box.component.html',
  styleUrls: ['./note-box.component.scss']
})
export class NoteBoxComponent implements OnInit {

  @Input() programOption: [];

  constructor() { }

  
  ngOnInit() {
    console.log(this.programOption);
  }

}
