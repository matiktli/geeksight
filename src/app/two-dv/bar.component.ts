import { Component, OnInit, Input } from '@angular/core';
import { Index } from './index.object';

@Component({
  selector: 'app-bar',
  template: `
    <div [ngStyle]="barStyle" style="border: solid black 1px;text-align: center;">
    </div>
    `
})
export class Bar implements OnInit {

  @Input()
  key?: number;

  @Input()
  value: number;

  @Input()
  config: any;

  barStyle: {};

  constructor() { }


  ngOnInit() {
      this.barStyle = {
        'background-color': 'blue',
        'height': this.value * this.config.hSize + 'px',
        'width': this.config.wSize + 'px' 
      };
  }

}
