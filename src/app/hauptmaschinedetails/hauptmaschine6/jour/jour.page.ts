import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jour',
  templateUrl: './jour.page.html',
  styleUrls: ['./jour.page.scss'],
})
export class JourPage implements OnInit {

  constructor( private route : Router) { }

  ngOnInit() {
  }
  backpage(){
    this.route.navigate(['/hauptmaschinedetails/hauptmaschine6'])
  }

}
