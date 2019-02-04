import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-note-box',
  templateUrl: './note-box.component.html',
  styleUrls: ['./note-box.component.scss'],
  providers: []
})
export class NoteBoxComponent {

  @Input() note: any;

  constructor() { }

}
