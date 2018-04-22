import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { CarousalComponent } from '../home/carousal/carousal.component';
import { NewsFeedComponent } from '../home/news-feed/news-feed.component';

import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    CarousalComponent,
    NewsFeedComponent
  ]
})
export class HomeModule { }
