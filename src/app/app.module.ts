import { TempComponent } from './temp/temp.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { ExtraComponent } from './extra/extra.component';
// import { GraphComponent } from './graph/graph.component';
// import { SbuGraphComponent } from './graph/sbu/sbu.component';
import { DataService } from './services/data.service';
import { SearchComponent } from './search-page/search/search.component';
import { SearchPageComponent } from './search-page/searchPage.component';
// import {DialogModule} from 'primeng/dialog';
import { map } from './routing/routing';
//import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import {ChartModule} from 'primeng/chart';
// import {TabViewModule} from 'primeng/tabview';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
  AppComponent,
  SearchComponent,
  SearchPageComponent,
  TempComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    map,
    HttpClientModule,
    FormsModule
    
    
],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
