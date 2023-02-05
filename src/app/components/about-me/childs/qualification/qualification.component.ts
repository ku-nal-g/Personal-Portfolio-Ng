import { Component } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent {

  education:boolean = true;

  workExp: boolean = false;

  toggleDiv(type:string){
    switch(type){
      case 'education' :
      this.education = true;
      this.workExp = false;
      break;

      case 'workExp' :
        this.education = false;
        this.workExp = true;
        break;
    }
  }
  getTabsClass(type:string){
    switch(type){
      case 'education' :
      return this.education == true ? 'style-tabs' : 'qual_tabs';

      case 'workExp' :
        return this.workExp == true ? 'style-tabs' : 'qual_tabs';
    }
    return "";
  }

}
