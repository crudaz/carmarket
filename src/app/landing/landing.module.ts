import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppLandingRoutingModule } from './landing-routing.module';

// Components
import { LandingComponent } from './';

import { HeaderComponent, FooterComponent } from './components';
import { CardComponent } from './shared/';
import { PortfolioComponent } from './pages';
import { SearchPipe } from './shared/pipes';

@NgModule({
  imports: [
    AppLandingRoutingModule,
    CommonModule,
    FormsModule
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
    PortfolioComponent,
    SearchPipe
  ],
  providers: [SearchPipe]
})
export class LandingModule { }
