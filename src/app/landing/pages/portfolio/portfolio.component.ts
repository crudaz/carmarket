import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { CarService } from '../../core';

// Models
import { Car } from '../../models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  search:string = '';
  carList: any[] = [];
  compareList: any[] = [];

  constructor(
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.carService.getCarList().subscribe( list => {
      this.carList = list;
    });
  }

  getCar(event: Car) {
    this.carService.setCar(event);

    if(event.toCompare === true) {
      (this.compareList.length < 3) ? this.compareList.push(event) : null; 
    }
    else {
      this.compareList = [];
    }
  }

  getAction(event) {
    
   if (event === 'compare') {
     this.carService.setList(this.compareList);
   }
   else {
     this.deleleCar(event);
   }
  }

  deleleCar(id: number) {
    this.compareList = this.compareList.filter(item => item.id !== id);
  }


}
