import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-dbz-mainpage',
  templateUrl: './mainpage.component.html'
})

export class MainComponent {
  constructor(private dbzService: DbzService){

  }

  get characters(): Character[] {
    return [...this.dbzService.characters]
  }

  deleteCharacter(id: string): void {
    return this.dbzService.deleteCharacterById(id)
  }

  createCharacter(character: Character): void {
    return this.dbzService.createCharacter(character)
  }
}
