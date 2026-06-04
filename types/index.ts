export type SignalType = 'no_website' | 'outdated_website' | 'job_offer' | 'new_registration';
export type ProspectStatus = 'new' | 'qualified' | 'contacted' | 'replied' | 'deal' | 'rejected';

export interface Prospect {
  id: string;
  name: string;
  sector: string;
  city: string;
  detectedSignal: SignalType;
  qualificationScore: number; // 0-100
  freshnessScore: number; // 0-100
  contactCount: number;
  status: ProspectStatus;
  firstContactDate?: string;
  lastActivityDate: string;
  website?: string;
  email?: string;
  linkedinUrl?: string;
  companySize?: string;
  estimatedValue?: number;
}

export interface Message {
  id: string;
  prospectId: string;
  type: 'email' | 'linkedin';
  content: string;
  sendDate: string;
  opened: boolean;
  replied: boolean;
}

export interface Deal {
  id: string;
  prospectId: string;
  estimatedValue: number;
  stage: 'discovery' | 'proposal' | 'negotiation' | 'closed_won' | 'closed_lost';
  closingDate?: string;
}
