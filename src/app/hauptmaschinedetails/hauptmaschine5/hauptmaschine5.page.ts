import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hauptmaschine5',
  templateUrl: './hauptmaschine5.page.html',
  styleUrls: ['./hauptmaschine5.page.scss'],
})
export class Hauptmaschine5Page implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine5/jour'])
  }
  nextpage2(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine5/semaine'])
  }
  nextpage3(){
    this.route.navigate(['hauptmaschinedetails/hauptmaschine5/mois'])
  }
  backpage(){
    this.route.navigate(['/hauptmaschinedetails'])
  }
}
