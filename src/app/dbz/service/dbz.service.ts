import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: "Goku",
      power: 10000
    },
    {
      id: uuid(),
      name: "Krillin",
      power: 500
    },
    {
      id: uuid(),
      name: "Piccoro",
      power: 8000
    },
    {
      id: uuid(),
      name: "Gohan",
      power: 7000
    },
  ];

  createCharacter(character: Character):void{
    const newWarrior: Character = {id: uuid(), ...character}
    this.characters.push(newWarrior);
  }

  deleteCharacterById(id: string):void {
    console.log(id);
    this.characters = this.characters.filter((character) => character.id !== id)
  }

}
