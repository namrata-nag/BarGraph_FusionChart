import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FusionChartsModule } from 'angular4-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
