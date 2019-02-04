import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProgramComponent } from './program/program.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  //{

    // path: '',
    // component: AppComponent,
    // children: [
    //   {
    //     path: 'home',
    //     component: HomeComponent
    //   },
    //   {
    //     path: 'o-nas',
    //     component: AboutComponent
    //   },
    //   {
    //     path: 'program',
    //     component: ProgramComponent
    //   },
    //   {
    //     path: 'kontakt',
    //     component: ContactComponent
    //   }
    // ]
  //},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
