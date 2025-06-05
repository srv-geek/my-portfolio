import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
@ViewChild('typedText') typedText!: ElementRef;

  phrases = ['Java Developer', 'Full Stack Developer', 'Angular Specialist', 'Spring Boot Expert'];
  currentPhrase = 0;
  currentChar = 0;

  ngAfterViewInit() {
    this.typePhrase();
  }

  typePhrase() {
    const phrase = this.phrases[this.currentPhrase];
    const displayText = phrase.substring(0, this.currentChar + 1);
    this.typedText.nativeElement.textContent = displayText;

    if (this.currentChar < phrase.length - 1) {
      this.currentChar++;
      setTimeout(() => this.typePhrase(), 100);
    } else {
      setTimeout(() => this.erasePhrase(), 1500);
    }
  }

  erasePhrase() {
    const phrase = this.phrases[this.currentPhrase];
    const displayText = phrase.substring(0, this.currentChar - 1);
    this.typedText.nativeElement.textContent = displayText;

    if (this.currentChar > 0) {
      this.currentChar--;
      setTimeout(() => this.erasePhrase(), 50);
    } else {
      this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
      setTimeout(() => this.typePhrase(), 500);
    }
  }
}
