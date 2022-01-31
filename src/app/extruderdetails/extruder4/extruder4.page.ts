import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extruder4',
  templateUrl: './extruder4.page.html',
  styleUrls: ['./extruder4.page.scss'],
})
export class Extruder4Page implements OnInit {

  constructor(private route : Router) { }


  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['extruderdetails/extruder4/jour'])
  }
  nextpage2(){
    this.route.navigate(['extruderdetails/extruder4/semaine'])
  }
  nextpage3(){
    this.route.navigate(['extruderdetails/extruder4/mois'])
  }
  backpage(){
    this.route.navigate(['/extruderdetails'])
  }
}