import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: Car;
  @Output() carSelected = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  OnClick(car: Car, action: string) {
    action === 'compare' ? car.toCompare = true : car.toCompare = false; 
    this.carSelected.emit(car);
  }


}
