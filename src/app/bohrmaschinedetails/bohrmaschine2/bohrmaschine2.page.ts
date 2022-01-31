import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bohrmaschine2',
  templateUrl: './bohrmaschine2.page.html',
  styleUrls: ['./bohrmaschine2.page.scss'],
})
export class Bohrmaschine2Page implements OnInit {

  constructor(private route : Router) { }


  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['bohrmaschinedetails/bohrmaschine2/jour'])
  }
  backpage(){
    this.route.navigate(['/bohrmaschinedetails'])
  }
}

