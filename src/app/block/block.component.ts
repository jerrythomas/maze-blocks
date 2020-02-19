import { Component, OnInit, HostBinding, Input, SimpleChanges, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rect:[block]',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  @Input("type") blockType:string = 'route';
  @Input("rowIndex") rowIndex:number = 0;
  @Input("colIndex") colIndex:number = 0;
  @Input("size") blockSize:number;
  @Input("nextBlock") nextBlock:boolean = false;
  @Output() moveNext: EventEmitter<any> = new EventEmitter();

  @HostBinding('class') currentClass:string = this.blockType ;
  @HostBinding('attr.width') blockWidth:number = this.blockSize-1 ;
  @HostBinding('attr.height') blockHeight:number = this.blockSize-1 ;
  @HostBinding('attr.x') x:number;
  @HostBinding('attr.y') y:number;

  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log("type =", this.blockType);
    //if (this.nextBlock){
    this.moveNext.emit(this)
    //}
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.blockType.currentValue !== this.currentClass){
      this.currentClass = changes.blockType.currentValue
    } 
    
    this.x=this.rowIndex*this.blockSize
    this.y=this.colIndex*this.blockSize 
    //[attr.width]=size-1 [attr.height]=size-1
  }
  constructor() { }

  ngOnInit(): void {
    this.blockWidth = this.blockSize - 1
    this.blockHeight = this.blockSize - 1
  }

}
