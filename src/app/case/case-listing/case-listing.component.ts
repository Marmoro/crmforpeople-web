import { Component, OnInit } from '@angular/core';
import { Case } from '../case.class';
import { CaseService } from '../case.service';

@Component({
  selector: 'app-case-listing',
  templateUrl: './case-listing.component.html',
  styleUrls: ['./case-listing.component.scss']
})
export class CaseListingComponent implements OnInit {

  cases: Case[] = [];

  constructor(public caseService: CaseService) { }

  ngOnInit(): void {
    this.caseService.get().subscribe((next: any) => {
      this.cases = next;
    }, error => {
      console.log(error);
    });
  }

}
