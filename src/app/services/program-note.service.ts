import { Injectable, OnInit, Component } from '@angular/core';
import { ProgramService } from './program.service';
import { Subject } from 'rxjs';
import { ProgramState } from '../interfaces/program-state';

@Injectable()

export class ProgramNoteService implements OnInit{

  programTable = [];
  programTableLenght: number;
  recentTableIndex: number = 0;

  recentNote = [];
  previousNote = [];
  nextNote = [];



  constructor(private programService: ProgramService) { 

    //console.log(this.previousNote);
    // console.log(this.programSubject.next());
    this.programTable = [...this.programService.program];
    this.programTableLenght = this.programTable.length;
    this.recentNote.push(this.programTable[this.recentTableIndex]);
    this.nextNote.push(this.programTable[this.recentTableIndex + 1]);
    this.previousNote.push(this.getPreviousNote());
  }



  ngOnInit() {

  }

  private getPreviousNote(): [] {
    if(this.recentTableIndex === 0) {
      return this.programTable[this.programTableLenght - 1];
    } else {
      return this.programTable[this.recentTableIndex - 1];
    }
  }

  onShowNexNote() {
    this.recentTableIndex++;
    console.log(this.recentTableIndex);
    
  }
}
