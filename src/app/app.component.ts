import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 num:number=8;
 

 add(n:number):void{
   this.num =this.num+ n;
 }
 

 

}
