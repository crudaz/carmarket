import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../../core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  carSelected: any;
  subscription: Subscription;

  constructor(
    private router: Router,
    private carService: CarService
  ) { }

  ngOnInit() {
    this.subscription = this.carService.getCar()
      .subscribe( res => {
        this.carSelected = res;
        console.log(res);
      });
  }


}
