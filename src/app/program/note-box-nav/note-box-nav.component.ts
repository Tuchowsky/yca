import { Component, OnInit, Injectable } from '@angular/core';
import { ProgramNoteService } from 'src/app/services/program-note.service';
import { BehaviorSubject } from 'rxjs';


@Injectable()
@Component({
  selector: 'app-note-box-nav',
  templateUrl: './note-box-nav.component.html',
  styleUrls: ['./note-box-nav.component.scss'],
})
export class NoteBoxNavComponent implements OnInit {

  programTable = [];
  programTableIndex: number = 0;

  private nextClicked: boolean;
  private prevClicked: boolean;


  private subscription;

  constructor(private programNoteService: ProgramNoteService) { }

  ngOnInit() {
    this.subscription = this.programNoteService.notes.subscribe(
      (state) => {
        this.prevClicked = state.prevClicked;
        this.nextClicked = state.nextClicked;
      }
    )
  }

  onShowPrev() {
    this.programNoteService.onShowPrevNote();
    console.log(this.prevClicked, this.nextClicked);
  }

  onShowNext() {
    this.programNoteService.onShowNextNote();
    console.log(this.prevClicked, this.nextClicked);
  }
}
