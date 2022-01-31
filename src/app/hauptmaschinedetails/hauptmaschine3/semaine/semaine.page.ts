import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-semaine',
  templateUrl: './semaine.page.html',
  styleUrls: ['./semaine.page.scss'],
})
export class SemainePage implements OnInit {

  constructor( private route : Router) { }

  ngOnInit() {
  }
  backpage(){
    this.route.navigate(['/hauptmaschinedetails/hauptmaschine3'])
  }

}
