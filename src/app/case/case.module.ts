import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateInquiryComponent } from './create-inquiry/create-inquiry.component';
import { CaseService } from './case.service';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CaseListingComponent } from './case-listing/case-listing.component';
import { CaseDetailComponent } from './case-detail/case-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: CaseListingComponent,
  },
  {
    path: ':id',
    component: CaseDetailComponent,
  },
  {
    path: 'inquiry/create',
    component: CreateInquiryComponent,
    data: { inquiryType: 'inquiry' },
  },
  {
    path: 'complain/create',
    component: CreateInquiryComponent,
    data: { inquiryType: 'complain' },
  },
  {
    path: 'compliment/create',
    component: CreateInquiryComponent,
    data: { inquiryType: 'compliment' },
  }
]

@NgModule({
  declarations: [CreateInquiryComponent, CaseListingComponent, CaseDetailComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [CaseService]
})
export class CaseModule { }
