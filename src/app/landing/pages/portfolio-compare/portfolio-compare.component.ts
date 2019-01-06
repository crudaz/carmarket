import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CarService } from '../../core';

@Component({
  selector: 'app-portfolio-compare',
  templateUrl: './portfolio-compare.component.html',
  styleUrls: ['./portfolio-compare.component.scss']
})
export class PortfolioCompareComponent implements OnInit {
  subscription: Subscription;
  carList: any;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.subscription = this.carService.getList()
      .subscribe( res => {
        
        console.log('list: ', res);
        this.carList = res;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
