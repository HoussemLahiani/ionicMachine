import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mois',
  templateUrl: './mois.page.html',
  styleUrls: ['./mois.page.scss'],
})
export class MoisPage implements OnInit {

  constructor( private route : Router) { }

  ngOnInit() {
  }
  backpage(){
    this.route.navigate(['/extruderdetails/extruder3'])
  }

}