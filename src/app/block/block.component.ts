import { Component, OnInit, HostBinding, Input, SimpleChanges, HostListener, Output, EventEmitter } from '@angular/core';
import { Block } from '../models/block';

@Component({
  selector: 'rect:[block]',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  @Input("data") data:Block;
  @Input("type") type:string;
  @Output() moveNext: EventEmitter<any> = new EventEmitter();

  @HostBinding('class') currentClass:string;
  @HostBinding('attr.x') x:number;
  @HostBinding('attr.y') y:number;
  @HostBinding('attr.width') blockWidth:number;
  @HostBinding('attr.height') blockHeight:number;
  
  @HostListener('click', ['$event.target']) onClick(btn) {
    //console.log("type =", this.type);
    //if (this.nextBlock){
    this.moveNext.emit(this.data)
    //}
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentClass = this.type;
    this.x=this.data.col*this.data.size;
    this.y=this.data.row*this.data.size; 
    //[attr.width]=size-1 [attr.height]=size-1
  }
  constructor() { }

  ngOnInit(): void {
    this.blockWidth = this.data.size - 1
    this.blockHeight = this.data.size - 1
  }

}
