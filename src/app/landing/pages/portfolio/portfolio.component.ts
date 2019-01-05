import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  search:any = '';
  carList: any[] = [];
  
  constructor() { }

  ngOnInit() {

    this.carList = [
      {
        model: 'Renault Twingo Access',
        imagePath: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262',
        year: '2015',
        price: '8000'
      },
      {
        model: 'Mazda 3',
        imagePath: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262',
        year: '2015',
        price: '8000'
      },
      {
        model: 'Kia Picanto',
        imagePath: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262',
        year: '2015',
        price: '8000'
      },
      {
        model: 'BMW',
        imagePath: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262',
        year: '2015',
        price: '8000'
      },
      {
        model: 'Renault Twingo Access',
        imagePath: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262',
        year: '2015',
        price: '8000'
      }
    ];

  }

}
