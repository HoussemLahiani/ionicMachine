import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hauptmaschine1',
  templateUrl: './hauptmaschine1.page.html',
  styleUrls: ['./hauptmaschine1.page.scss'],
})
export class Hauptmaschine1Page implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine1/jour'])
  }
  nextpage2(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine1/semaine'])
  }
  nextpage3(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine1/mois'])
  }
  backpage(){
    this.route.navigate(['/hauptmaschinedetails'])
  }
}
