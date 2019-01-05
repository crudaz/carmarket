import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  newList = [
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
