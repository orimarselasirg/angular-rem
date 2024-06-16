
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { MainComponent } from './pages/mainpage.component';
import { WarriorlistComponent } from './components/warriorlist/warriorlist.component';



@NgModule({
  declarations: [MainComponent, WarriorlistComponent, AddCharacterComponent],
  exports: [MainComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
