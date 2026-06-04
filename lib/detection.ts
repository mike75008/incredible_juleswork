import { Prospect, SignalType } from '../types';
import { calculateQualificationScore, calculateFreshnessScore } from './scoring';

/**
 * Simulates scraping from various French sources.
 */
export async function simulateDetection(): Promise<Prospect[]> {
  const sources = ['Infogreffe', 'Google Maps', 'LinkedIn', 'Indeed'];
  console.log(`Scanning sources: ${sources.join(', ')}...`);

  // Simulate finding a new prospect
  const newProspect: Prospect = {
    id: Math.random().toString(36).substr(2, 9),
    name: 'Nouvelle Entité SAS',
    sector: 'Legal',
    city: 'Marseille',
    detectedSignal: 'no_website',
    qualificationScore: 0,
    freshnessScore: 0,
    contactCount: 0,
    status: 'new',
    lastActivityDate: new Date().toISOString(),
    companySize: '10-49',
    estimatedValue: 5000,
  };

  // Run intelligence on it
  newProspect.qualificationScore = calculateQualificationScore(newProspect);
  newProspect.freshnessScore = calculateFreshnessScore(newProspect, 0, {
    hasGoogleReviews: false,
    hasLinkedInActivity: true,
    hasNewPost: false
  });

  return [newProspect];
}
