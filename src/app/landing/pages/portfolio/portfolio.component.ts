import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  
  carList = [
    {
      model: 'Renault Twingo Access',
      imagePath: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262',
      year: '2015',
      price: '8000'
    },
    {
      model: 'Renault Twingo Access',
      imagePath: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262',
      year: '2015',
      price: '8000'
    },
    {
      model: 'Renault Twingo Access',
      imagePath: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262',
      year: '2015',
      price: '8000'
    },
    {
      model: 'Renault Twingo Access',
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


  constructor() { }

  ngOnInit() {
  }

}
