import { Component, OnInit } from '@angular/core';
import { Block } from '../models/block';

@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  data:Block[] = [
    {row:1, col:1},
    {row:1, col:2},
    {row:1, col:3},
    {row:2, col:3},
    {row:2, col:4},
    {row:3, col:4},
    {row:3, col:5},
    {row:3, col:6},
    {row:4, col:6},
    {row:4, col:7},
    {row:4, col:8},
    {row:4, col:9},
    {row:5, col:9},
    {row:6, col:9}
  ]
  
  currentIndex = 0;

  size=20
  cursor : {
    x: number,
    y: number
  }
  constructor() { }

  getType(index){
    let type:string  = 'route';
    switch(index - this.currentIndex) { 
      case 0: {type='cursor'; break; }
      case 1: {type='hint'; break; }
      default: break; 
   } 
   return type;
  }
  moveNext(child){
    //console.log(child.index, this.currentIndex)
    if (child.index == this.currentIndex + 1){
      //this.data[this.currentIndex].active = false;
      this.currentIndex++
      //this.data[this.currentIndex].active = true;
    }
  }

  ngOnInit(): void {
    let index = 0
    this.data.forEach(element => {
      element.size = 20;
      element.active = (index == 0);
      element.index = index++;
    });    

    //console.log(this.data)
  }

}
