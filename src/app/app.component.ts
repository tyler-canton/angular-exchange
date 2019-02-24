import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedQuestion = 'question';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCm4dINPAQ35OS02w5l71QpwD547GOlc98',
      authDomain: 'variableassign-1498009708125.firebaseapp.com',
    });
  }
}
