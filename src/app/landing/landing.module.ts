import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppLandingRoutingModule } from './landing-routing.module';

// Components
import { LandingComponent } from './';
import { HeaderComponent, FooterComponent } from './components';
import { CardComponent, CompareComponent } from './shared/';

// Pages
import { PortfolioComponent } from './pages';
import { PortfolioDetailComponent } from './pages/';

// Pipes
import { SearchPipe } from './shared/pipes';
import { SortPipe } from './shared/pipes/sort.pipe';
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
    CompareComponent
  ],
  providers: [
    SearchPipe, 
    CarService
  ]
})
export class LandingModule { }
