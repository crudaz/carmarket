import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './';
import { PortfolioComponent, PortfolioDetailComponent } from './pages';

const routes: Routes = [
    {
      path: '',
      children: [
        { path: '', component: PortfolioComponent },
        { path: 'product-details', component: PortfolioDetailComponent },
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