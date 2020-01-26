import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {
  public title = "Tutorial from Joatmon";
  public imgLink = "http://lorempixel.com/400/200";
  public applyClass = true;
  public applyBlue = false;
  public fname:string;
  public lname:string;
  public showElement = true;
  public color = 'green';
  public colors = ['red', 'blue', 'green'];
  public cone = true;
  public ctwo = true;
  public style = 'italic';
  public size = '30px';
  name = "The Joatmoan";
  date = new Date();
  constructor() { }

  ngOnInit() {
  }

  onClick(value){
    console.log(value);
  }

  toggle(){
    this.cone = !this.cone;
    this.ctwo = !this.ctwo;
  }

}
