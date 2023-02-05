import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  icon1 : boolean = true;
  icon2 : boolean = false;

  constructor(){}

  toggleIcon1(){
    this.icon1 = !this.icon1;
  }

  toggleIcon2(){
    this.icon2 = !this.icon2;
  }

}
