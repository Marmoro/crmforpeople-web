export enum CaseStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  ON_HOLD = 'ON_HOLD',
  RESOLVED = 'RESOLVED',
  CANCELED = 'CANCELED',
}

export enum CaseType {
  INQUIRY = 'INQUIRY',
  COMPLAIN = 'COMPLAIN',
  COMPLIMENT = 'COMPLIMENT',
}

export class Case {
  id?: number;
  caseType?: CaseType;
  caseStatus?: CaseStatus;
  content?: string;
  organization?: number;
  user?: number;
  timestamp?: Date;
}
