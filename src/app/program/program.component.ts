import { Component, OnInit, Injectable } from '@angular/core';
// import { ProgramService } from '../services/program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  providers: []
})

@Injectable()
export class ProgramComponent implements OnInit {

  // programTable = [];

  constructor() { }

  ngOnInit() {
    //this.programTable = this.programService.program;
    // console.log(this.programTable);
  }

}
