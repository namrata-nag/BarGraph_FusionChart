import { TableComponent } from './table/table.component';
import { VerticalsComponent } from './graph/verticals/vertical.component';
import { ExtraComponent } from './extra/extra.component';
import { GraphComponent } from './graph/graph.component';
import { SbuGraphComponent } from './graph/sbu/sbu.component';
import { DataService } from './services/data.service';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ChartModule} from 'primeng/chart';
import {TabViewModule} from 'primeng/tabview';
//import {LoginComponent} from './login/login.component';
//import { VERSION, MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
   CardComponent,
   SearchComponent,
  SbuGraphComponent,
  GraphComponent,
  ExtraComponent,
  VerticalsComponent,
  TableComponent
  
  ],
  imports: [
    BrowserModule,
     ChartModule,
     TabViewModule
 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
