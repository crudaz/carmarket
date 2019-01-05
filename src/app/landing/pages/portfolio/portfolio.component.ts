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
        mark: 'Renault',
        model: 'Twingo Access',
        photo: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262',
        year: '2015',
        price: '8000'
      },
      {
        mark: 'Mazda',
        model: '3',
        photo: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262',
        year: '2015',
        price: '8000'
      },
      {
        mark: 'Kia',
        model: 'Picanto ION',
        photo: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262',
        year: '2015',
        price: '8000'
      },
      {
        mark: 'BMW',
        model: 'Serie 4',
        photo: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262',
        year: '2015',
        price: '8000'
      },
      {
        mark: 'Renault',
        model: 'Renault Twingo Access',
        photo: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262',
        year: '2015',
        price: '8000'
      }
    ];

  }

}
