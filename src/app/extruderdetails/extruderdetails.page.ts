import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extruderdetails',
  templateUrl: './extruderdetails.page.html',
  styleUrls: ['./extruderdetails.page.scss'],
})
export class ExtruderdetailsPage implements OnInit {

  constructor(private route : Router) { }
  ngOnInit() {
  }
  nextpage1(){
    
    this.route.navigate(['/extruderdetails/extruder1'])
  }
  nextpage2(){
    
    this.route.navigate(['/extruderdetails/extruder2'])
  }
  nextpage3(){
    
    this.route.navigate(['/extruderdetails/extruder3'])
  }
  nextpage4(){
    
    this.route.navigate(['/extruderdetails/extruder4'])
  }
  backpage(){
    this.route.navigate(['/machines'])
  }

}
