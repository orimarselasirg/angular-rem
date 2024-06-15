import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ["Spiderman", "Superman", "Hulk", "Aquaman"];
  public deletedHero: string = ""

  deleteHero(): void{
    this.deletedHero = this.heroNames.pop() ?? ''

  }

  addHero(hero: string): void {
    this.heroNames.push('Ramiro')
  }

}
