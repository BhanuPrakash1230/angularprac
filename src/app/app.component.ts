import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngserviceService } from './angservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit{
  
  private Mynumber:number=25;
  isVisible:boolean=true;

  data:any=[];
  x:any=[];
  constructor(private ds:AngserviceService){}

  ngOnInit(){
   this.ds.getdata().subscribe(a=>{
     this.data=a;
     //console.log("api",this.data.results);
     var x=this.data.results.splice(0,2);
     console.log("push",x)
    })
  }

  get counter(){
    return this.Mynumber;
  }
  set counter(value){
    this.Mynumber=value;
  }
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  switchVisibility(){
    this.isVisible=!this.isVisible;
  }

}
