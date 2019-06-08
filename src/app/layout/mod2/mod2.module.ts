import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen2Component } from './screen2/screen2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: Screen2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [Screen2Component],
  
})
export class Mod2Module { }
