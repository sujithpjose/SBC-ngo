import { Component, OnInit } from '@angular/core';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private _spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    // this._spinnerService.show();
  }

}
