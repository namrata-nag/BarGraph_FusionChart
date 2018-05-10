import { Component,OnInit } from '@angular/core';
import {DataService } from '../services/data.service';

@Component({
  selector: 'table-root',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

     data:any;
     constructor(private dataservice:DataService) {
       
    }
    ngOnInit(){
        
        this.data=this.dataservice.getData().top;
        console.log("Initialising datas List..." +  this.data.top[0]);
        
         
    }
}