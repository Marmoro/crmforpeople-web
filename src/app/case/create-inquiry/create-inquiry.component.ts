import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Inquiry } from '../case.class';
import { CaseService } from '../case.service';

@Component({
  selector: 'app-create-inquiry',
  templateUrl: './create-inquiry.component.html',
  styleUrls: ['./create-inquiry.component.scss']
})
export class CreateInquiryComponent implements OnInit {

  inquiry: Inquiry = new Inquiry();
  organizations: any[];

  constructor(private caseService: CaseService, private router: Router, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) {
    this.inquiry = new Inquiry();
    this.organizations = this.caseService.getOrganizations();
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.inquiry.inquiryType = data.inquiryType;
    })
  }

  createInquiry() {
    // validate?

    // set today's date to inquiry
    this.inquiry.timestamp = new Date();

    // freeze the object (may not be required)
    Object.freeze(this.inquiry);

    // perform API call
    console.log(JSON.stringify(this.inquiry));

    // error checking
    

    // if positive then show below message
    this.snackBar.open('Thanks!', '', {
      duration: 1500,
    }).afterDismissed().subscribe(next => {
      this.router.navigate(['/home'])
    });
  }

}
