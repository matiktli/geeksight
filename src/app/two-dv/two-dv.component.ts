import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Index } from './index.object';
import { timeout, delay } from 'q';

@Component({
  selector: 'app-two-dv',
  templateUrl: './two-dv.component.html',
  styleUrls: ['./two-dv.component.scss']
})
export class TwoDVComponent implements OnInit {
  
  private static SIZE = 1;

  @Input()
  array: number[];

  @Input()
  indexes: Index[];

  config: {};

  windowWidth: number;

  constructor(private elRef:ElementRef) { 
  }


  ngOnInit() {
    this.windowWidth = window.innerWidth;
    let max = this.array.reduce( (a,b) => Math.max(a,b));
    let wSize = (this.windowWidth/2 / this.array.length);
    let hSize = window.innerHeight/2 / max;
    this.config = {
      'hSize': hSize,
      'wSize': wSize
    };    
    console.log(this.array)
    //this.generateFromArray(this.array);
  }

  private generateFromArray(array: number[]): void {
    for(let i = 0; i < array.length; i++) {
      //console.log('arr: ', i, ' -> ', array[i]);
      //`<app-bar [value]="val"></app-bar>`
    }
  }

  public mixArray() {
    var currentIndex = this.array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.array[currentIndex];
      this.array[currentIndex] = this.array[randomIndex];
      this.array[randomIndex] = temporaryValue;
    }
  }

  public async bubbleSort(delayTime = 1/10) {
    let size = this.array.length;
    for(let i=0;i<size;i++) {
      for(let j=0;j<size;j++) {
        if (this.array[j] > this.array[j+1]) {
          this.swap(this.array, j, j+1);
          await delay(delayTime);
        }
      }
    }
  }

  private swap(array: number[], i: number, j: number) {
    let tmp = array[j]
    array[j] = array[i];
    array[i] = tmp;
  }

  public async selectionSort(delayTime = 1/10) {
    let size = this.array.length;
    for(let i=0;i<size;i++) {
      let min_idx = i;
      for(let j=i+1;j<size;j++) {
        if (this.array[min_idx] > this.array[j]) {
          min_idx = j;
        }
        await delay(delayTime)
      }
      this.swap(this.array, min_idx, i);
    }
  }

}
