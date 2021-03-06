import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* 3rd party lib imports */
import { AngularMaterialModule } from '@app/shared/lib/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    StickyNavModule,
    NgxCarouselModule
  ],
  declarations: [
    AboutUsComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    StickyNavModule,
    NgxCarouselModule
  ]
})
export class SharedModule { }
