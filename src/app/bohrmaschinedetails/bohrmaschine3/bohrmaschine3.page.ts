import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bohrmaschine3',
  templateUrl: './bohrmaschine3.page.html',
  styleUrls: ['./bohrmaschine3.page.scss'],
})
export class Bohrmaschine3Page implements OnInit {

  constructor(private route : Router) { }


  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['bohrmaschinedetails/bohrmaschine3/jour'])
  }
  backpage(){
    this.route.navigate(['/bohrmaschinedetails'])
  }
}


