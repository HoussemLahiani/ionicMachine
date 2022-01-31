import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hauptmaschinedetails',
  templateUrl: './hauptmaschinedetails.page.html',
  styleUrls: ['./hauptmaschinedetails.page.scss'],
})
export class HauptmaschinedetailsPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }
  nextpage1(){
    
    this.route.navigate(['/hauptmaschinedetails/hauptmaschine1'])
  }
  nextpage2(){
    
    this.route.navigate(['/hauptmaschinedetails/hauptmaschine2'])
  }
  nextpage3(){
    
    this.route.navigate(['/hauptmaschinedetails/hauptmaschine3'])
  }
  nextpage4(){
    
    this.route.navigate(['/hauptmaschinedetails/hauptmaschine4'])
  }
  nextpage5(){
    
    this.route.navigate(['/hauptmaschinedetails/hauptmaschine5'])
  }
  nextpage6(){
    
    this.route.navigate(['/hauptmaschinedetails/hauptmaschine6'])
  }
  backpage(){
    this.route.navigate(['/machines'])
  }

}
