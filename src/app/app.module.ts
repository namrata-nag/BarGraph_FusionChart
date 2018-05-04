import { GlobeGraphComponent } from './component/globe.component';
import { DoughnutGraphComponent } from './component/doughnutGraph.component';
import { LineGraphComponent } from './component/lineGraph.component';
import { CardComponent } from './component/cards.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BarGraphComponent} from './component/barGraph.component';
import {CardModule} from 'primeng/card';
import { AppComponent } from './app.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {TableComponent} from './component/table.component';
import {ChartModule} from 'primeng/chart';
import {TabViewModule} from 'primeng/tabview';
import {DataService } from './component/data.service';

@NgModule({
  declarations: [
    AppComponent,
   BarGraphComponent,
   TableComponent,
   CardComponent,
   LineGraphComponent,
   DoughnutGraphComponent,
   GlobeGraphComponent 
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    SidebarModule,
    ButtonModule,
    ChartModule,
    TabViewModule
      

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
