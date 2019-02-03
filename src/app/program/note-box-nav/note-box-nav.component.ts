import { Component, OnInit, Injectable } from '@angular/core';
import { ProgramService } from 'src/app/services/program.service';


@Injectable()
@Component({
  selector: 'app-note-box-nav',
  templateUrl: './note-box-nav.component.html',
  styleUrls: ['./note-box-nav.component.scss'],
  providers: [ProgramService]
})
export class NoteBoxNavComponent implements OnInit {

  programTable = [];

  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.programTable = this.programService.program;
    console.log(this.programTable);
  }

  onShowPrev() {
    console.log('show prev');
  }

  onShowNext() {
    console.log('show next');
  }
}
