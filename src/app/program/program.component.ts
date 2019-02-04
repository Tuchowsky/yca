import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';


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

export class ProgramComponent implements OnInit, OnDestroy {


  previousNote: {};
  recentNote: {};
  nextNote: {};

  private subscription; 

  constructor(private programNoteService: ProgramNoteService) { }

  ngOnInit() {

    this.subscription = this.programNoteService.notes.subscribe(
      (state) => {
        this.previousNote = state.previous,
        this.recentNote = state.recent
        this.nextNote = state.next
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscibe();
  }

}
