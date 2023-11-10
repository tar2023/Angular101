import { Component } from '@angular/core';

@Component({
  selector: 'app-cdgs-root',
  templateUrl: './cdgs-root.component.html',
  styleUrls: ['./cdgs-root.component.scss']
})
export class CdgsRootComponent {

  customerList:String[] = ['customer1', 'customer2','customer3']
  constructor(){}
  ngOnInit(){}

  pushCustomer(){
    this.customerList.push('customer'+(this.customerList.length+1));
  }

  unshiftCustomer(){
    this.customerList.unshift('customer'+(this.customerList.length+1));
  }

  removerCustomer(index : number){
   this.customerList.splice(index, 1)
  }
  
}
