import { TempComponent } from './../temp/temp.component';

import {Routes,RouterModule} from'@angular/router';
import { SearchPageComponent } from '../search-page/searchPage.component';


const routing:Routes=[
    { path: '', component: SearchPageComponent,data:{depth:1} },
    { path: 'landing', component:TempComponent,data:{depth:2}  },
 
    
];
export const map=RouterModule.forRoot(routing); 