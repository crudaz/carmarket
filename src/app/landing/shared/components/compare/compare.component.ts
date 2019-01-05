import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  @Input() data: any[] = [];
  @Output() carDeleted = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  remove(id: number) {
    this.carDeleted.emit(id);
  }

  onClick() {
    
  }

}
