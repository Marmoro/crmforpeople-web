import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'home',
        component:LandingPageComponent,
      },
      {
        path: 'case',
        loadChildren: () => import('./case/case.module').then(m => m.CaseModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
