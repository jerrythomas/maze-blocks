import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  data:number[][] = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,1,2,1,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0]
  ] 
  startRow :number = 1
  startCol :number = 0
  endRow:number = 6
  endCol:number = 8

  size=20
  cursor : {
    x: number,
    y: number
  }
  constructor() { }
  moveNext(child){
    console.log(child)
  }
  getType(value){
    if (value == 1){
      return 'route'
    } else if (value == 2) {
      return 'cursor'
    }
    return 'blank'
  }

  ngOnInit(): void {
    let rows:number  = this.data.length
    let cols:number = this.data[0].length

    this.cursor.x = 0
    this.cursor.y = 0
    console.log(rows,cols)

  }

}
