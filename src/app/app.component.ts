import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit() {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true      // whether animation should happen only once while scrolling down
    });
  }
}
