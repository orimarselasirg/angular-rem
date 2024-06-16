import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-warriorlist',
  templateUrl: './warriorlist.component.html',
  styleUrl: './warriorlist.component.css'
})
export class WarriorlistComponent {

  @Input()
  public warriorList : Character[] = [];

  @Output()
  public emitDeleteCharacter: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id: string):void{
    this.emitDeleteCharacter.emit(id);
  }

}
