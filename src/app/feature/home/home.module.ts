import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';

import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
