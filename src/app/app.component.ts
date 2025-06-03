import { Component, OnInit } from '@angular/core';
declare const aos: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  ngOnInit() {
    aos.init({ duration: 1000, once: true });
  }
}
