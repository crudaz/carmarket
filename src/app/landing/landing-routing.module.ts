import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './';
import { 
  PortfolioComponent, 
  PortfolioDetailComponent,
  PortfolioCompareComponent
 } from './pages';

const routes: Routes = [
    {
      path: '',
      children: [
        { path: '', component: PortfolioComponent },
        { path: 'product-detail', component: PortfolioDetailComponent },
        { path: 'product-compare', component: PortfolioCompareComponent },
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
      RouterModule
    ],
  })
  export class AppLandingRoutingModule {
      
  }