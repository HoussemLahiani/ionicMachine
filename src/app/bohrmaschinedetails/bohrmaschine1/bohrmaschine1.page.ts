import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bohrmaschine1',
  templateUrl: './bohrmaschine1.page.html',
  styleUrls: ['./bohrmaschine1.page.scss'],
})
export class Bohrmaschine1Page implements OnInit {

  constructor(private route : Router) { }


  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['bohrmaschinedetails/bohrmaschine1/jour'])
  }
  backpage(){
    this.route.navigate(['/bohrmaschinedetails'])
  }
}
