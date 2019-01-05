import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: Card;

  constructor() { }

  ngOnInit() {


  }

}
