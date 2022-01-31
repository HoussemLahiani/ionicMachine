import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-druckdetails',
  templateUrl: './druckdetails.page.html',
  styleUrls: ['./druckdetails.page.scss'],
})
export class DruckdetailsPage implements OnInit {

  constructor(private route : Router) { }
  ngOnInit() {
  }
  nextpage1(){
    
    this.route.navigate(['/druckdetails/druckprufung1'])
  }
  nextpage2(){
    
    this.route.navigate(['/druckdetails/druckprufung2'])
  }
  backpage(){
    this.route.navigate(['/machines'])
  }

}