import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
      templateUrl: './app.component.html'
  
})
export class AppComponent {
    width = 600;
    height = 400;
    type = 'column2d';
    dataFormat = 'json';
    dataSource = {
    "chart": {
        "caption": "Harry's SuperMart",
        "subCaption": "Top 5 stores in last month by revenue",
        "numberPrefix": "$",
        "theme": "ocean"
    },
    "data": [
        {
            "label": "SBI Bank",
            "value": "880000"
        },
        {
            "label": "HSBC Bank",
            "value": "730000"
        },
        {
            "label": "ICICI Bank",
            "value": "590000"
        },
        {
            "label": "HDFC Bank",
            "value": "520000"
        },
        {
            "label": "Punjab National Bank       ",
            "value": "330000"
        }
    ]
	};
}
