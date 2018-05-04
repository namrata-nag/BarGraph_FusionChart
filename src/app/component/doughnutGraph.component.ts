import {Component,OnInit} from '@angular/core';
import {DataService } from './data.service';

@Component({
      selector: 'doughnut-graph',
  templateUrl: './doughnutGraph.component.html',
  styleUrls: ['./doughnutGraph.component.css']
})
export class DoughnutGraphComponent implements OnInit {
     do:Boolean=true;
    li1:Boolean;
    tab:Boolean=false;
    arr:any[];
    labeling:any;
    datas:any;
    data: any;
    data1:any;
    data2:any;
    color=["#FF6384","#36A2EB","#FFCE56","#606768","#47a55e", "#1f6ea3"];
    line:any;
  
    back(){
        this.tab=false;
        this.li1=false;
                   this.do=true;
                    
    }

    barEvent(event){
       
            this.tab=true;
           var j=0;
           var num=[12];
           
            for(var x=0;x<12;x++){
                num[x]=(Math.floor(Math.random()*100));
                
            }
          this.arr=this.datas.data[this.datas.top[this.labeling]][this.datas.verticals[this.datas.top[this.labeling]][event.element._index]];
            this.line = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aug','Sept','Oct','Nov','Dec'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: num,
                     fill: false,
                    borderColor: '#4bc0c0'
                }
                
            ]
        }
            
    }
 selectData(event) {
         this.labeling =event.element._index ;
         
         console.log("hello there   " + this.datas.data[this.datas.top[event.element._index]][this.datas.verticals[this.datas.top[event.element._index]][0]]);
          this.li1=true;
          this.do=false;
          var len=this.datas.verticals[this.datas.top[event.element._index]].length;
           var num=[len];
            console.log(len);
            for(var x=0;x<len;x++){
                num[x]=(Math.floor(Math.random()*100));
                
            }
           this.data1 = {
            labels: this.datas.verticals[this.datas.top[event.element._index]],
            datasets: [
                {
                    label: 'First Dataset',
                    data: num,
                    fill:true,
                    borderColor:this.color[event.element._index],
                     backgroundColor:this.color[event.element._index]
                }
                
            ]
        }

        
}

        constructor(private dataservice:DataService) {
       
    }
     ngOnInit(){
        
        this.datas=this.dataservice.getData();
        console.log("Initialising datas List..." +  this.datas.top[0]);
        
         this.data = {
            labels: this.datas.top,
            datasets: [
                {
                    data: [300, 50, 100,120,45,99],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                       "#606768",
                       "#47a55e",
                       "#1f6ea3"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                         "#3c4344",
                         "#328c48",
                         "#185f8e"
                    ]
                }]    
            };
    }
}