import { Component, OnInit, Injectable } from '@angular/core';


import { ProgramNoteService } from 'src/app/services/program-note.service';


@Injectable()

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})

export class ProgramComponent implements OnInit {

  recentNote = [];
  previousNote = [];
  nextNote = [];



  constructor(private programNoteService: ProgramNoteService) { 

  }

  ngOnInit() {
    this.recentNote = this.programNoteService.recentNote;
    this.previousNote = this.programNoteService.previousNote;
    this.nextNote = this.programNoteService.nextNote;

    // console.log(this.subscription);

  }

}
