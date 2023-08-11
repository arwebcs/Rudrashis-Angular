import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'String Interpolation';
  num:number=0;
  bool:boolean=true;
  anyString:any ="Any type";

  myFunction(){
    return this.num;
  }
  myParams(a:number){
    return a;
  }
  constructor(){

  }
}
