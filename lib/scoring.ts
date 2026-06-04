import { Prospect, SignalType } from '../types';

/**
 * Calculates a qualification score (0-100) based on sector, size, and signal strength.
 */
export function calculateQualificationScore(prospect: Partial<Prospect>): number {
  let score = 50; // Base score

  // Sector weight (simplified)
  const highValueSectors = ['Real Estate', 'Legal', 'Medical', 'Luxury', 'Industrial'];
  if (prospect.sector && highValueSectors.includes(prospect.sector)) {
    score += 15;
  }

  // Company size weight
  if (prospect.companySize) {
    if (prospect.companySize.includes('10-49') || prospect.companySize.includes('50-249')) {
      score += 20;
    } else if (prospect.companySize.includes('1-9')) {
      score += 10;
    }
  }

  // Signal strength
  switch (prospect.detectedSignal) {
    case 'no_website':
      score += 15; // High need
      break;
    case 'outdated_website':
      score += 10;
      break;
    case 'job_offer':
      score += 12; // Growth indicator
      break;
    case 'new_registration':
      score += 8;
      break;
  }

  return Math.min(100, score);
}

/**
 * Calculates a dynamic freshness score (0-100) based on:
 * - Signal age
 * - External activity (simulated)
 * - Prospect value
 */
export function calculateFreshnessScore(
  prospect: Partial<Prospect>,
  daysSinceSignal: number,
  recentActivitySignals: {
    hasGoogleReviews: boolean;
    hasLinkedInActivity: boolean;
    hasNewPost: boolean;
  }
): number {
  let score = 100;

  // Decay based on time
  score -= daysSinceSignal * 2;

  // Boost based on current activity level
  if (recentActivitySignals.hasLinkedInActivity) score += 10;
  if (recentActivitySignals.hasGoogleReviews) score += 5;
  if (recentActivitySignals.hasNewPost) score += 10;

  // High value hot prospect stays fresh longer (slower decay)
  if ((prospect.qualificationScore || 0) > 80) {
    score += 15;
  }

  return Math.max(0, Math.min(100, score));
}
