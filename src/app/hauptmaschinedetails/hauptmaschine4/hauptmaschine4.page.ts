import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hauptmaschine4',
  templateUrl: './hauptmaschine4.page.html',
  styleUrls: ['./hauptmaschine4.page.scss'],
})
export class Hauptmaschine4Page implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine4/jour'])
  }
  nextpage2(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine4/semaine'])
  }
  nextpage3(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine4/mois'])
  }
  backpage(){
    this.route.navigate(['/hauptmaschinedetails'])
  }
}