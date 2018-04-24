import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

@Input()  count: number = 0;

 // @Output()  change: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }


 //
 // increment() {
 //   this.count++;
 //   this.change.emit(this.count);
 // }
 //
 // decrement() {
 //   this.count--;
 //   this.change.emit(this.count);
 // }

}
