import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  @Input() data: any[] = [];
  @Output() action = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onClick(action: string) {
    this.action.emit(action);
  }
}
