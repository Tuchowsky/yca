import { Injectable, OnInit, Component } from '@angular/core';
import { ProgramService } from './program.service';
import { Subject, BehaviorSubject} from 'rxjs';
import { ProgramState } from '../interfaces/program-state';

@Injectable()

export class ProgramNoteService implements OnInit{

  private programTable = [];
  private programTableLenght: number;
  private recentTableIndex: number = 0;

  private previousNote: {};
  private recentNote: {};
  private nextNote: {};


  notes: BehaviorSubject<ProgramState>;


  constructor(private programService: ProgramService) { 

    this.programTable = [...this.programService.program];
    this.programTableLenght = this.programTable.length;

    this.previousNote = this.getPreviousNote();
    this.recentNote = this.programTable[this.recentTableIndex];
    this.nextNote = this.programTable[this.recentTableIndex + 1];

    this.notes = new BehaviorSubject<any>({
      previous: this.previousNote,
      recent: this.recentNote,
      next: this.nextNote 
    })
  }



  ngOnInit() {
    
  }

  private getPreviousNote(): {} {

    if(this.recentTableIndex === 0) {
      return this.programTable[this.programTableLenght - 1];
    } else if(this.recentTableIndex === this.programTableLenght - 1) {
      return this.programTable[0];
    } else {
      return this.programTable[this.recentTableIndex - 1];
    }
  }

  private getNextNote(): {} {
    if(this.recentTableIndex === this.programTableLenght - 1) {
      return this.programTable[0];
    } else if(this.recentTableIndex === 0) {
      return  this.programTable[this.recentTableIndex + 1]
    } else {
      return this.programTable[this.recentTableIndex + 1];
    }
  }

  onShowNextNote() {
    this.recentTableIndex++;
    
    if(this.recentTableIndex > this.programTable.length - 1) {
      this.recentTableIndex = 0;
    }

    if(this.recentTableIndex === this.programTable.length - 1) {
      this.previousNote = this.getPreviousNote();
      this.recentNote = this.programTable[this.recentTableIndex];
      this.nextNote = this.getNextNote();
    } else {
      this.previousNote = this.getPreviousNote();
      this.recentNote = this.programTable[this.recentTableIndex];
      this.nextNote = this.getNextNote();
    }

    this.notes.next({
      previous: this.previousNote,
      recent: this.recentNote,
      next: this.nextNote
    })
  }

  onShowPrevNote() {
    this.recentTableIndex--;

    if(this.recentTableIndex < 0) {
      this.recentTableIndex = this.programTableLenght - 1;
    }

    if(this.recentTableIndex === 0) {
      this.previousNote = this.getPreviousNote();
      this.recentNote = this.programTable[this.recentTableIndex];
      this.nextNote = this.getNextNote();
    } else {
      this.previousNote = this.getPreviousNote();
      this.recentNote = this.programTable[this.recentTableIndex];
      this.nextNote = this.getNextNote();
    }

    


    this.notes.next({
      previous: this.previousNote,
      recent: this.recentNote,
      next: this.nextNote
    })
  }

 
}
