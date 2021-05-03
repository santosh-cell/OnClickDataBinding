import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnClickDataBinding';
  newpost='defalt value';
  value:any="";
  onadd(){
    this.newpost=this.value;

  }
}
