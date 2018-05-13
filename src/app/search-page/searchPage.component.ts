import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { trigger, state, style, transition,animate, group, query, stagger, keyframes} from '@angular/animations'; 
@Component({
  selector: 'searchPage-root',
  templateUrl: './searchPage.component.html',
  styleUrls: ['./searchPage.component.css'],
 
})
export class SearchPageComponent {
   constructor(private router: Router){}
    show:Boolean=true;
  title = 'app';
  animate(){
   
    this.router.navigate(['/landing']);
  }
}