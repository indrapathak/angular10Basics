import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.styl']
})
export class ChildCompComponent implements OnInit {

  @Input() user
  @Output() parentFunction:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
      this.parentFunction.emit("Indra Passing Data from Child to parent component")
    console.warn("the user data is",this.user)
  }

}
