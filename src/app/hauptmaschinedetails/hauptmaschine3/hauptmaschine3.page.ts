import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hauptmaschine3',
  templateUrl: './hauptmaschine3.page.html',
  styleUrls: ['./hauptmaschine3.page.scss'],
})
export class Hauptmaschine3Page implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine3/jour'])
  }
  nextpage2(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine3/semaine'])
  }
  nextpage3(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine3/mois'])
  }
  backpage(){
    this.route.navigate(['/hauptmaschinedetails'])
  }
}