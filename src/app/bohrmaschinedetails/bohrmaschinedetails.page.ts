import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bohrmaschinedetails',
  templateUrl: './bohrmaschinedetails.page.html',
  styleUrls: ['./bohrmaschinedetails.page.scss'],
})
export class BohrmaschinedetailsPage implements OnInit {
  constructor(private route : Router) { }
  ngOnInit() {
  }
  nextpage1(){
    
    this.route.navigate(['/bohrmaschinedetails/bohrmaschine1'])
  }
  nextpage2(){
    
    this.route.navigate(['/bohrmaschinedetails/bohrmaschine2'])
  }
  nextpage3(){
    
    this.route.navigate(['/bohrmaschinedetails/bohrmaschine3'])
  }
  backpage(){
    this.route.navigate(['/machines'])
  }

}
  

