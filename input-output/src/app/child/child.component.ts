import { Component,Input,Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


// To receive data from parent component, we need just input decorator
@Input() dataComeFromParent:Number;
@Input() typing:string;

// To send data to the parent component, we need
// output decorator and EventEmitter

@Output() change: EventEmitter<Number> = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
  }


}
