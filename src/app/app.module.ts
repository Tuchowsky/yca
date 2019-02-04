import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProgramComponent } from './program/program.component';
import { ContactComponent } from './contact/contact.component';
import { NoteBoxComponent } from './program/note-box/note-box.component';
import { NoteBoxNavComponent } from './program/note-box-nav/note-box-nav.component';
import { ProgramService } from './services/program.service';
import { ProgramNoteService } from './services/program-note.service';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollService } from './services/scroll.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProgramComponent,
    ContactComponent,
    NoteBoxComponent,
    NoteBoxNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot()
  ],
  providers: [ProgramService, ProgramNoteService, ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
