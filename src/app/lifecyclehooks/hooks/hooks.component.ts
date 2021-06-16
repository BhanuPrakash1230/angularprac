import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})

export class HooksComponent implements OnInit, OnChanges, DoCheck{

@Input() Mynumber:number;


  constructor() { }
  ngOnChanges(changes:SimpleChanges){
    const newNumberChange:SimpleChange=changes.Mynumber; 
    console.log("ngonchanges=>previousvalue",newNumberChange.previousValue)
    console.log("ngonchanges=>currentvalue",newNumberChange.currentValue)
  }
  ngOnInit(): void {
    console.log("ngoninit=>value",this.Mynumber)
  } 
  ngDoCheck(){
    console.log("ngdocheck=>value",this.Mynumber)
  }
  ngOnDestroy(){
    console.log("destroy the component")
  }
}
