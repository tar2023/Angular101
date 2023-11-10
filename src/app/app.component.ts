import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
//   value = 0;

//   calBuffer(value:string){
//     const price =Number(value)
//     this.value = (price*3)/4

//     if (this.value === 0) {
//       console.log('กินฟรี');

//       this.value 
//     }
// } 
// }

export class AppComponent {
  title = 'my-new-project';
  appMinLabel2 = 'D-myAppMinlabel';
  appMaxLabel2 = 'D-myAppMaxlabel';
  sqaureHeight = 100;
  sqaureWidth = 250;
  appCounter = 20;
 activate: boolean =false; 

 testClick(){
  console.log('test EventBinding');
 }
 testcounterChange(){
  console.log('test counterChange ');
 }

 doAppMinChange(value:number){
  
  console.log('test MinChange:',value)
 
  }
  doAppMaxChange(value:number){
    console.log('test MaxChange',value)
  }

  toggleActivate() {
    this.activate = !this.activate;
  }
  
  value: string = 'Hello PrimeNg';
}



