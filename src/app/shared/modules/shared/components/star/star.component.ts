import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  totalWidth: number;
  constructor() { }

  ngOnChanges() {
    // if ( !this.totalWidth ) {
    //   this.totalWidth = document.querySelector('.star-component').clientWidth;
    // }

    this.starWidth = this.rating * 98 / 5;
  }

}
