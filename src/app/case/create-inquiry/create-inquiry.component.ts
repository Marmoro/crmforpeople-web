import { CaseType } from './../case.class';
import { Organization } from './../../organization/organization.class';
import { OrganizationService } from './../../organization/organization.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Case } from '../case.class';
import { CaseService } from '../case.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-inquiry',
  templateUrl: './create-inquiry.component.html',
  styleUrls: ['./create-inquiry.component.scss']
})
export class CreateInquiryComponent implements OnInit {

  case: Case = new Case();
  organizations: Organization[] = [];

  constructor(private organizationService: OrganizationService, private caseService: CaseService, private router: Router, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) {
    this.case = new Case();
    this.organizationService.get().subscribe(
      (organizations) => {
        this.organizations = organizations;
        console.log(this.organizations);

      },
      (error) => {
        console.log(error);
      },
      () => {},
    )
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.case.caseType = data.inquiryType;
    })
  }

  createCase() {
    console.log(this.case);
    this.caseService.create(this.case).subscribe(data => {
      console.log(data);
      if (data) {
        this.snackBar.open('Thanks!', '', {
          duration: 1500,
        }).afterDismissed().subscribe(next => {
          this.router.navigate(['/home'])
        });
      } else {
        this.snackBar.open('There was an error. Please Try again', '', {
          duration: 1500,
        });
      }
    });
    // validate?

    // set today's date to inquiry
    // this.inquiry.timestamp = new Date();

    // freeze the object (may not be required)
    // Object.freeze(this.inquiry);

    // perform API call
    // console.log(JSON.stringify(this.inquiry));

    // error checking
    

    // if positive then show below message
   
  }

}
