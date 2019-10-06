import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  arrayGenerated: number[];
  
  constructor() { 
  }



  ngOnInit() {
    this.arrayGenerated = [1,3,5,6,3,2,6,4,8,9];
    for(let i = 0; i < 100; i++) {
      this.arrayGenerated[i] = i;
    }
  }


}
