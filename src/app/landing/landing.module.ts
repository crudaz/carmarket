import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLandingRoutingModule } from './landing-routing.module';

// Components
import { LandingComponent } from './';

import { HeaderComponent, FooterComponent } from './components';
import { CardComponent } from './shared/card/card.component';
import { PortfolioComponent } from './pages';


@NgModule({
  imports: [
    AppLandingRoutingModule,
    CommonModule
  ],
  exports: [
    LandingComponent,
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    PortfolioComponent
  ],
})
export class LandingModule { }
