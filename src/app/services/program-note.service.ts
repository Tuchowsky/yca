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
  private nextClicked: boolean = false;
  private prevClicked: boolean = false;


  notes: BehaviorSubject<ProgramState>;


  constructor(private programService: ProgramService) { 

    this.programTable = [...this.programService.program];
    this.programTableLenght = this.programTable.length;

    this.previousNote = this.getPreviousNote();
    this.recentNote = this.programTable[this.recentTableIndex];
    this.nextNote = this.programTable[this.recentTableIndex + 1];

    this.notes = new BehaviorSubject<ProgramState>({
      previous: this.previousNote,
      recent: this.recentNote,
      next: this.nextNote,
      nextClicked: this.nextClicked,
      prevClicked: this.prevClicked
    })
  }



  ngOnInit() {
    
  }

  private getNextNote(): {} {

    if(this.recentTableIndex === 0) {
      return this.programTable[this.programTableLenght - 1];
    } else if(this.recentTableIndex === this.programTableLenght - 1) {
      return this.programTable[this.programTableLenght - 2];
    } else {
      return this.programTable[this.recentTableIndex - 1];
    }
  }

  private getPreviousNote(): {} {
    if(this.recentTableIndex === this.programTableLenght - 1) {
      return this.programTable[0];
    } else if(this.recentTableIndex === 0) {
      return  this.programTable[this.recentTableIndex + 1]
    } else {
      return this.programTable[this.recentTableIndex + 1];
    }
  }

  onShowNextNote() {
    this.prevClicked = false;
    this.nextClicked = true;

    setTimeout(()=>{
      this.prevClicked = false;
      this.nextClicked = false;
      this.updateState();
    }, 900)

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
    this.updateState();
  }

  onShowPrevNote() {
    this.prevClicked = true;
    this.nextClicked = false;

    setTimeout(()=>{
      this.prevClicked = false;
      this.nextClicked = false;
      this.updateState();
    }, 900)

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

    
    this.updateState();

  }

  updateState() {
    this.notes.next({
      previous: this.previousNote,
      recent: this.recentNote,
      next: this.nextNote,
      prevClicked: this.prevClicked,
      nextClicked: this.nextClicked
    })
  }
 
}
