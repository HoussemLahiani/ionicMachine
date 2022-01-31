import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hauptmaschine2',
  templateUrl: './hauptmaschine2.page.html',
  styleUrls: ['./hauptmaschine2.page.scss'],
})
export class Hauptmaschine2Page implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine2/jour'])
  }
  nextpage2(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine2/semaine'])
  }
  nextpage3(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine2/mois'])
  }
  backpage(){
    this.route.navigate(['/hauptmaschinedetails'])
  }
}