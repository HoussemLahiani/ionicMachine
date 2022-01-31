import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.page.html',
  styleUrls: ['./machines.page.scss'],
})
export class MachinesPage implements OnInit {

  constructor(private route :  Router) { }

  ngOnInit() {
  }
  nextpage1(){
    this.route.navigate(['/extruderdetails'])
  }
  nextpage2(){
    this.route.navigate(['/hauptmaschinedetails'])
  }
  nextpage3(){
    this.route.navigate(['/bohrmaschinedetails'])
  }
  nextpage4(){
    this.route.navigate(['/schlitzmaschinedetails'])
  }
  nextpage5(){
    this.route.navigate(['/druckdetails'])
  }
  backpage(){
    this.route.navigate(['/home'])
  }

}
