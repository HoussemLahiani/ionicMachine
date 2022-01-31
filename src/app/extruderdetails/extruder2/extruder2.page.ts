import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extruder2',
  templateUrl: './extruder2.page.html',
  styleUrls: ['./extruder2.page.scss'],
})
export class Extruder2Page implements OnInit {

  constructor(private route : Router) { }


  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['extruderdetails/extruder2/jour'])
  }
  nextpage2(){
    this.route.navigate(['extruderdetails/extruder2/semaine'])
  }
  nextpage3(){
    this.route.navigate(['extruderdetails/extruder2/mois'])
  }
  backpage(){
    this.route.navigate(['/extruderdetails'])
  }
}