import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyA_CVVzTenw_ogQtRF--nvhvJ0BWHt7akw",
      authDomain: "ng-shopping-app-ee7d7.firebaseapp.com"
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
