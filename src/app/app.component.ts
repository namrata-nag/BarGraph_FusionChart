import { element } from 'protractor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    display1: boolean = false;
    display: boolean = false;
    graph_data:any;
    data1: any;
    data2:any;
    cardData(){
             this.display1 = true;
    }
    selectData(event) {
           this.data1 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                     fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#48f93b'
                }
            ]
        }
        this.display = true;
        this.graph_data=event.element;
       console.log("event data is" + JSON.stringify(this.graph_data));
}
    
    constructor() {
     
         this.data2 = {
            labels: ['AXIS', 'SBI', 'HSBC', 'HDFC', 'ICICI', 'PUNJAB', 'CANARA'],
            datasets: [
                {
                   
                     label: 'My First dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
               
            ]
        }
    }
}



