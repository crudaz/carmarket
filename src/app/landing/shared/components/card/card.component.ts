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

  OnClickView(car: Car) {
    this.carSelected.emit(car);
  }

}
