import { Component, OnInit, Injectable } from '@angular/core';
import { ProgramService } from 'src/app/services/program.service';
import { ProgramNoteService } from 'src/app/services/program-note.service';


@Injectable()
@Component({
  selector: 'app-note-box-nav',
  templateUrl: './note-box-nav.component.html',
  styleUrls: ['./note-box-nav.component.scss'],
})
export class NoteBoxNavComponent implements OnInit {

  programTable = [];
  programTableIndex: number = 0;

  constructor(private programNoteService: ProgramNoteService) { }

  ngOnInit() {

  }

  onShowPrev() {
    this.programNoteService.onShowPrevNote();
  }

  onShowNext() {
    this.programNoteService.onShowNextNote();
    
  }
}
