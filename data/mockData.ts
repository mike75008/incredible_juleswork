import { Prospect, Message, Deal } from '../types';

export const mockProspects: Prospect[] = [
  {
    id: '1',
    name: 'Boulangerie Artisanale Dupont',
    sector: 'Food',
    city: 'Paris',
    detectedSignal: 'no_website',
    qualificationScore: 65,
    freshnessScore: 95,
    contactCount: 0,
    status: 'new',
    lastActivityDate: new Date().toISOString(),
    companySize: '1-9',
    estimatedValue: 1500,
  },
  {
    id: '2',
    name: 'Cabinet Médical Riviera',
    sector: 'Medical',
    city: 'Nice',
    detectedSignal: 'outdated_website',
    qualificationScore: 85,
    freshnessScore: 80,
    contactCount: 1,
    status: 'qualified',
    firstContactDate: '2024-05-20',
    lastActivityDate: '2024-05-25',
    companySize: '10-49',
    estimatedValue: 4500,
  },
  {
    id: '3',
    name: 'TechLogistics SARL',
    sector: 'Industrial',
    city: 'Lyon',
    detectedSignal: 'job_offer',
    qualificationScore: 75,
    freshnessScore: 90,
    contactCount: 0,
    status: 'new',
    lastActivityDate: new Date().toISOString(),
    companySize: '50-249',
    estimatedValue: 8000,
  },
  {
    id: '4',
    name: 'Luxe & Co',
    sector: 'Luxury',
    city: 'Bordeaux',
    detectedSignal: 'new_registration',
    qualificationScore: 90,
    freshnessScore: 98,
    contactCount: 2,
    status: 'contacted',
    firstContactDate: '2024-06-01',
    lastActivityDate: '2024-06-02',
    companySize: '10-49',
    estimatedValue: 12000,
  }
];

export const mockMessages: Message[] = [
  {
    id: 'm1',
    prospectId: '4',
    type: 'email',
    content: "Bonjour, j'ai remarqué votre récente immatriculation...",
    sendDate: '2024-06-01T10:00:00Z',
    opened: true,
    replied: false
  }
];

export const mockDeals: Deal[] = [
  {
    id: 'd1',
    prospectId: '4',
    estimatedValue: 12000,
    stage: 'discovery'
  }
];
