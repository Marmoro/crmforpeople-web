import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor() { }

  createInquiry() {
    return 'ok';
  }

  getOrganizations() {
    return ['company 1', 'company 2', 'company 3'];
  }
}
