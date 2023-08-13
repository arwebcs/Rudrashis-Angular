import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
 online:boolean = false;

 myFunction(){
  
  this.online = !this.online;
  console.log(this.online);
  return this.online;
 }

 list:number[]=[1,2,3,4,5,6,7];
 info:any=[{
  id:1,
  nm:"X",
  bool:true
 },
 {
  id:2,
  nm:"Y",
  bool:false
 }];

 color:string="color";
 green:string="green";
 t:string="color:yellow";
 f:string="color:brown";
}
