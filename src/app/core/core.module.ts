import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Import CoreModule Components */
import { HeaderComponent } from '@app/core/header/header.component';
import { FooterComponent } from '@app/core/footer/footer.component';

/* 3rd party lib imports */
import { StickyNavModule } from 'ng2-sticky-nav';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    StickyNavModule,
    Ng4LoadingSpinnerModule.forRoot(),
    FlexLayoutModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    Ng4LoadingSpinnerModule
  ]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
