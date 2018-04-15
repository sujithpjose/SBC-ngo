import { Component, OnInit } from '@angular/core';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CarousalConstants } from '@app/shared/constants/carousal.constants';

const imgBaseUrl = 'assets/images/carousal_';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private carouselOne;

  imageSources: string[] = [
    imgBaseUrl + '1.JPG',
    imgBaseUrl + '2.JPG',
    imgBaseUrl + '3.JPG',
    imgBaseUrl + '4.JPG',
    imgBaseUrl + '5.JPG'
  ];

  constructor(
    private _spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    // this._spinnerService.show();
    this.carouselOne = CarousalConstants.carouselOne;
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }

}
