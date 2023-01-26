import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  textToRender: string = "Web Developer";
  interval: any;

  constructor() {
    this.interval = setInterval(() => {
      this.changeText1();
    }, 5000)
  }
  changeText1() {
    this.textToRender = "Loves Coding & Music";
    setTimeout(() => {
      this.changeText2();
    }, 5000)
  }
  changeText2() {
    this.textToRender = "Web Developer"
    setTimeout(() => {
      clearInterval(this.interval);
    }, 4000);
  }
}
