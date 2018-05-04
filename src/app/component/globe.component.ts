import {Component} from '@angular/core';

@Component({
      selector: 'globe-graph',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.css']
})
export class GlobeGraphComponent {

    data: any;
     constructor() {
        this.data = {
            labels: ['Market','Bank','Technology'],
            datasets: [
                {
                    data: [30, 50, 300],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };
    }

}