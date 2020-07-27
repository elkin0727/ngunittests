import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Step01Component } from './step01/step01.component';

const routes: Routes = [
  { path: '', component: Step01Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
