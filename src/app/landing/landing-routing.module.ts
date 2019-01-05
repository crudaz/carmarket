import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './';
import { PortfolioComponent } from './pages';

const routes: Routes = [
    {
      path: '',
      children: [
        // { path: '', component: LandingComponent },
        { path: '', component: PortfolioComponent },
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