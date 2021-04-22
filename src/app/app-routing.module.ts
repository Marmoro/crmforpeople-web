import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './shared/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component:LandingPageComponent,
  },
  {
    path: '',
    children: [
      {
        path:'home',
        component:LandingPageComponent,
      },
      {
        path:'login',
        component:LoginComponent,
      },
      {
        path: 'case',
        canActivate: [AuthGuard],
        loadChildren: () => import('./case/case.module').then(m => m.CaseModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
