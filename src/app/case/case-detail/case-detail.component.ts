import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Case } from '../case.class';
import { CaseService } from '../case.service';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.scss']
})
export class CaseDetailComponent implements OnInit {

  case: Case = {};

  constructor(public caseService: CaseService, private activatedRoute: ActivatedRoute) {

    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (id) {
      this.caseService.get(id).subscribe((next: any) => {
        this.case = next;
        console.log(next);
      }, error => { console.log(error) })
    }

  }

  ngOnInit(): void {
  }

}
