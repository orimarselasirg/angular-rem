import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>counter: {{counter}}</h3>
  <button (click)="increment(1)">+</button>
  <button (click)="decrease(2)">-</button>
  <button (click)="reset()">reset</button>
  `
})

export class CounterComponent {
  public counter: number = 0;
  increment(value: number){
    this.counter += value
  }

  decrease(value: number){
    this.counter = this.counter - value
  }

  reset(){
    this.counter = 0
  }
}
