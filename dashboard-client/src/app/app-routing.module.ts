import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShellComponent} from "./shell/shell.component";

const routes: Routes = [
  {
    path: '',
    component: ShellComponent
  },
  {
    path: ':uuid',
    component: ShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
