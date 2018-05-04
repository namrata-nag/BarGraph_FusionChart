import { Component,OnInit } from '@angular/core';
import {DataService } from './component/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
   datas:any;
   constructor(private dataservice:DataService){}
   ngOnInit(){
        
        this.datas=this.dataservice.getData();
        console.log("Initialising datas List...");
        console.log(this.datas);
    }

}
