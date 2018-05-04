import {Component} from '@angular/core';

@Component({
      selector: 'bar-graph',
  templateUrl: './barGraph.component.html',
  styleUrls: ['./barGraph.component.css']
})
export class BarGraphComponent {
   arr1:any=[];
   arr:any=[0,1,2,3];
   len=4;
   card(i){
     var rem=this.arr.splice(0,1);
     this.len =this.len -1;
     this.arr1.push(rem);
     console.log("remove data" + this.arr1.length);
     
   }
   butn(){
      var rem=this.arr1.splice(0,1);
     this.len =this.len + 1;
     this.arr.push(rem);
   }
}