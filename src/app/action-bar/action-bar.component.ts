import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {
  @Input() counter = 0 ;
  @Input() step : number = 1;
  @Input() inputDisplay = true;

  @Output() counterChange = new EventEmitter();

constructor(){}
ngOnIit(): void {}


decrease(counter:string){
  const counterDown = Number(counter)
  // console.log('Hey Decrease');
  if(this.counter  > -100){
    this.counter = this.counter -counterDown;
    this.counterChange.emit(this.counter);
  }
}

increase(counter:string){
  const counterUp = Number(counter)
  // console.log('Hey increase');
  if(this.counter < 100){
    this.counter = this.counter +counterUp;
    this.counterChange.emit(this.counter);
  }
}
}
