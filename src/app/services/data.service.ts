import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {dataStore} from './dataStore';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService extends dataStore {

  selectedChart = new BehaviorSubject([]);
  searchQuery = new BehaviorSubject('');

  testNLP = new BehaviorSubject(null);


  constructor( private http: HttpClient) {
    super();
    this.data();
   }

  login(user) {
    return this.http.post(this.loginUrl, user);
  }

  getData() {
    let files = JSON.parse(localStorage.getItem('files'));
    console.log("data length", files);
     return files;
}

  setSearchQuery(query) {
    this.searchQuery.next(query);
  }

  getSearchQuery() {
    return this.searchQuery.asObservable();
  }

  getAnalysisGraphs() {
    return this.http.get('../../assets/db.json');
  }

  setSelectedChart(chartName) {
    this.selectedChart.next(chartName);
  }

  getSelectedChart() {
    return this.selectedChart.asObservable();
  }

  getVerRevenueData() {
    return this.http.get('http://localhost:8080/ver_revenue');
  }

  getAccRevenueData() {
    return this.http.get('http://localhost:8090/acc_revenue');
  }

  getAccTimelineData() {
    return this.http.get('http://localhost:8070/accountTimeLineData');
  }

  getSbuTimeLineData() {
    return this.http.get('http://localhost:8050/sbuTimeLine');
  }

  getVerticalTimeLineData() {
    return this.http.get('http://localhost:8050/verticalTimeLine');
  }

  destructureQuery(query: string) {
    return this.http.get(this.nlpUrl + query);
  }

  submitFeedback(feedback) {}

}
