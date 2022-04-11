import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  colorval='red';
  count : number = 1;      
  increment(){

      this.count = this.count+1; 
  }

  decrement(){
      this.count = this.count - 1; 
  }

  val:any = "";



  constructor() { }

  ngOnInit(): void {
  }

}
