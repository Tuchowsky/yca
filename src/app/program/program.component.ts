import { Component, OnInit, Injectable } from '@angular/core';
import { ProgramNoteService } from 'src/app/services/program-note.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  providers: [ProgramNoteService]
})

@Injectable()
export class ProgramComponent implements OnInit {

  recentNote = [];
  previousNote = [];
  nextNote = [];


  constructor(private programNoteService: ProgramNoteService) { }

  ngOnInit() {
    this.recentNote = this.programNoteService.recentNote;
    this.previousNote = this.programNoteService.previousNote;
    this.nextNote = this.programNoteService.nextNote;
  }

}
