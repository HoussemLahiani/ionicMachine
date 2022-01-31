import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-schlitzmaschinedetails',
  templateUrl: './schlitzmaschinedetails.page.html',
  styleUrls: ['./schlitzmaschinedetails.page.scss'],
})
export class SchlitzmaschinedetailsPage implements OnInit {

  constructor(private route : Router) { }
  ngOnInit() {
  }
  nextpage1(){
    
    this.route.navigate(['/schlitzmaschinedetails/schlitzmaschine1'])
  }
  backpage(){
    this.route.navigate(['/machines'])
  }

}
  

