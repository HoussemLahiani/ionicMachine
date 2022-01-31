import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extruder1',
  templateUrl: './extruder1.page.html',
  styleUrls: ['./extruder1.page.scss'],
})
export class Extruder1Page implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['extruderdetails/extruder1/jour'])
  }
  nextpage2(){
    this.route.navigate(['extruderdetails/extruder1/semaine'])
  }
  nextpage3(){
    this.route.navigate(['extruderdetails/extruder1/mois'])
  }
  backpage(){
    this.route.navigate(['/extruderdetails'])
  }
}
