import { Component, OnInit } from '@angular/core';

import { CarousalConstants } from '@app/shared/constants/carousal.constants';

const imgBaseUrl = 'assets/images/carousal_';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {

  private carouselHome;

  imageSources: string[] = [
    imgBaseUrl + '1.JPG',
    imgBaseUrl + '2.JPG',
    imgBaseUrl + '3.JPG',
    imgBaseUrl + '4.JPG',
    imgBaseUrl + '5.JPG'
  ];

  constructor() { }

  ngOnInit() {
    this.carouselHome = CarousalConstants.carouselHome;
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }

}

/* https://github.com/sheikalthaf/ngx-carousel : REFERENCE */
