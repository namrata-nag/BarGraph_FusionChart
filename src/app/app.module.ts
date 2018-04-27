import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService} from './weather.service';
import {ChartModule} from 'primeng/chart';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    DialogModule,
    CardModule,
    TabViewModule,
    TableModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
