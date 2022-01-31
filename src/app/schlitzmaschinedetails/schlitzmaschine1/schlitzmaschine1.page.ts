import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-schlitzmaschine1',
  templateUrl: './schlitzmaschine1.page.html',
  styleUrls: ['./schlitzmaschine1.page.scss'],
})
export class Schlitzmaschine1Page implements OnInit {

  constructor(private route : Router) { }


  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['schlitzmaschinedetails/schlitzmaschine1/jour'])
  }
  backpage(){
    this.route.navigate(['schlitzmaschinedetails'])
  }
}

