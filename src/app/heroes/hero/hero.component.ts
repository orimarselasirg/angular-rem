import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "Superman";
  public age: number = 10


  changeName(): void {
    this.name = "SpiderMan"
  }

  changeAge(): void {
    this.age = 100
  }

  get capitalizeName(): string {
    return this.name.toUpperCase()
  }

  getNameAndAge(): string {

    return `${this.name} - ${this.age} - ${this.capitalizeName}`
  }

  resetForm():void{
    this.name = "Superman"
    this.age = 10
  }
}
