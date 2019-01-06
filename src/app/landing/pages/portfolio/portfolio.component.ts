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
  search:any = '';
  carList: any[] = [];
  compareList: any[] = [];

  constructor(
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.carList = [
      {
        id: 1,
        color: "black",
        type: "Automovil",
        transmision: "Manual",
        mark: "Renault",
        model: "Twingo Access",
        photo: "https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262",
        year: "2015",
        price: "8000"
      },
      {
        id: 2,
        color: "white",
        type: "Automovil",
        transmision: "Automatic",
        mark: "Mazda",
        model: "3",
        photo: "https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262",
        year: "2015",
        price: "8000"
      },
      {
        id: 3,
        color: "blue",
        type: "Automovil",
        transmision: "Manual",
        mark: "Kia",
        model: "Picanto ION",
        photo: "https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262",
        year: "2015",
        price: "8000"
      },
      {
        id: 4,
        color: "yellow",
        type: "Automovil",
        transmision: "Automatic",
        mark: "BMW",
        model: "Serie 4",
        photo: "https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262",
        year: "2015",
        price: "8000"
      },
      {
        id: 5,
        mark: "Renault",
        model: "Twingo Access",
        photo: "https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262",
        year: "2015",
        price: "8000"
      }
    ];
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
