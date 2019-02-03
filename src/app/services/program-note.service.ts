import { Injectable, OnInit, Component } from '@angular/core';
import { ProgramService } from './program.service';

@Injectable({
  providedIn: 'root'
})

export class ProgramNoteService implements OnInit{

  programTable = [];
  programTableLenght: number;
  recentTableIndex: number = 0;

  recentNote = [];
  previousNote = [];
  nextNote = [];



  constructor(private programService: ProgramService) { 
    this.programTable = [...this.programService.program];
    this.programTableLenght = this.programTable.length;
   // console.log(this.programTable);
    this.recentNote.push(this.programTable[this.recentTableIndex]);
    this.nextNote.push(this.programTable[this.recentTableIndex + 1]);
    this.previousNote.push(this.getPreviousNote());
    // console.log(this.recentNote, this.previousNote, this.nextNote);
    // console.log(this.getPreviousNote());
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
}
