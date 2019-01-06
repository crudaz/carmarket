import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CarService } from '../../core';
import { Car } from '../../models';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  carSelected: Car;
  subscription: Subscription;

  constructor(
    private carService: CarService
  ) { }

  ngOnInit() {
    this.subscription = this.carService.getCar()
      .subscribe( res => {
        this.carSelected = res;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
