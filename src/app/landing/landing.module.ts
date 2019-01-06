import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppLandingRoutingModule } from './landing-routing.module';

// Components
import { LandingComponent } from './';
import { HeaderComponent, FooterComponent } from './components';
import { CardComponent, CompareComponent } from './shared/';

// Pages
import { 
  PortfolioComponent, 
  PortfolioDetailComponent, 
  PortfolioCompareComponent 
} from './pages';

// Pipes
import { 
  SearchPipe, 
  SortPipe 
} from './shared/pipes';

// Services
import { CarService } from './core';

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
    SearchPipe,
    SortPipe,
    PortfolioDetailComponent,
    CompareComponent,
    PortfolioCompareComponent
  ],
  providers: [
    SearchPipe, 
    CarService
  ]
})
export class LandingModule { }
