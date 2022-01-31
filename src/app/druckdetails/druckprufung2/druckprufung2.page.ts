import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-druckprufung2',
  templateUrl: './druckprufung2.page.html',
  styleUrls: ['./druckprufung2.page.scss'],
})
export class Druckprufung2Page implements OnInit {

  constructor(private route : Router) { }


  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['druckdetails/druckprufung2/jour'])
  }
  backpage(){
    this.route.navigate(['/druckdetails'])
  }
}
