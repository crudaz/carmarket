import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLandingRoutingModule } from './landing-routing.module';

// Components
import { LandingComponent } from './';
import { HeaderComponent } from './components';

@NgModule({
  imports: [
    AppLandingRoutingModule,
    CommonModule
  ],
  exports: [
    LandingComponent,
    HeaderComponent
  ],
  declarations: [
    LandingComponent,
    HeaderComponent
  ],
})
export class LandingModule { }
