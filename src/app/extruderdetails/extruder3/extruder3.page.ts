import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extruder3',
  templateUrl: './extruder3.page.html',
  styleUrls: ['./extruder3.page.scss'],
})
export class Extruder3Page implements OnInit {

  constructor(private route : Router) { }


  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['extruderdetails/extruder3/jour'])
  }
  nextpage2(){
    this.route.navigate(['extruderdetails/extruder3/semaine'])
  }
  nextpage3(){
    this.route.navigate(['extruderdetails/extruder3/mois'])
  }
  backpage(){
    this.route.navigate(['/extruderdetails'])
  }
}