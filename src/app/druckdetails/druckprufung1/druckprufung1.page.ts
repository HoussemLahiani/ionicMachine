import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-druckprufung1',
  templateUrl: './druckprufung1.page.html',
  styleUrls: ['./druckprufung1.page.scss'],
})
export class Druckprufung1Page implements OnInit {

  constructor(private route : Router) { }


  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['druckdetails/druckprufung1/jour'])
  }
  backpage(){
    this.route.navigate(['/druckdetails'])
  }
}
