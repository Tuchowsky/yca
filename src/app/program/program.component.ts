import { Component, OnInit, Injectable } from '@angular/core';


import { ProgramNoteService } from 'src/app/services/program-note.service';
import { Subscription } from 'rxjs';
import { ProgramState } from '../interfaces/program-state';


@Injectable()

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  providers: [ProgramNoteService]
})

export class ProgramComponent implements OnInit {


  previousNote: {};
  recentNote: {};
  nextNote: {};


  constructor(private programNoteService: ProgramNoteService) { }

  ngOnInit() {

    this.programNoteService.notes.subscribe(
      (state) => {
        this.previousNote = state.previous,
        this.recentNote = state.recent
        this.nextNote = state.next
      }
    )
  }

}
