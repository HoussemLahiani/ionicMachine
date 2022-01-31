import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hauptmaschine6',
  templateUrl: './hauptmaschine6.page.html',
  styleUrls: ['./hauptmaschine6.page.scss'],
})
export class Hauptmaschine6Page implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine6/jour'])
  }
  nextpage2(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine6/semaine'])
  }
  nextpage3(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine6/mois'])
  }
  backpage(){
    this.route.navigate(['/hauptmaschinedetails'])
  }
}
