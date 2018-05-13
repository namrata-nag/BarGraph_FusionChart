import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'search-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
 
})
export class SearchComponent {

    query:any;
    constructor(private router: Router, private dataService: DataService){}
       animate(){
          this.dataService.destructureQuery(this.query).subscribe((nlpResult)=>{
            //console.log(nlpResult);
            this.dataService.setSearchQuery(nlpResult);
          });
        
        this.router.navigate(['/landing']);
  
  }
}
