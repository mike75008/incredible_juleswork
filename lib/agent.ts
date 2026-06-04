import { Prospect } from '../types';

/**
 * Agentic Message Engine
 * Generates hyper-personalized messages and learns from results.
 */
export class ProspectingAgent {
  private conversionHistory: { success: boolean, signal: string }[] = [];

  /**
   * Generates a personalized French email based on prospect situation.
   */
  public generateMessage(prospect: Prospect): string {
    const signalDetails = this.getSignalContext(prospect);

    let message = `Objet: Accélérez la croissance de ${prospect.name} à ${prospect.city}\n\n`;
    message += `Bonjour,\n\n`;
    message += `J'ai suivi avec intérêt l'actualité de ${prospect.name}. `;
    message += `${signalDetails}\n\n`;

    if (prospect.detectedSignal === 'no_website') {
      message += `En 2024, ne pas être visible sur Google à ${prospect.city} est une opportunité manquée chaque jour pour une entreprise de votre secteur (${prospect.sector}). `;
    } else if (prospect.detectedSignal === 'outdated_website') {
      message += `Votre site actuel ne reflète plus l'excellence de votre travail. Une mise à jour permettrait de convertir 3x plus de visiteurs. `;
    }

    message += `Seriez-vous disponible pour un court échange de 10 minutes mardi prochain ?\n\n`;
    message += `Cordialement,\nL'équipe Web Agency`;

    return message;
  }

  private getSignalContext(prospect: Prospect): string {
    switch (prospect.detectedSignal) {
      case 'no_website':
        return `J'ai remarqué que vous n'avez pas encore de présence web optimisée.`;
      case 'outdated_website':
        return `J'ai analysé votre site web et identifié plusieurs leviers d'optimisation technique.`;
      case 'job_offer':
        return `Félicitations pour vos récents recrutements ! C'est le moment idéal pour renforcer votre image de marque.`;
      case 'new_registration':
        return `Félicitations pour le lancement de votre activité !`;
      default:
        return `Votre activité dans le secteur ${prospect.sector} a retenu mon attention.`;
    }
  }

  /**
   * Simulates learning from feedback.
   */
  public recordFeedback(success: boolean, signal: string) {
    this.conversionHistory.push({ success, signal });
    console.log(`Agent learning: Signal ${signal} conversion was ${success ? 'SUCCESSFUL' : 'FAILED'}. Total history: ${this.conversionHistory.length} events.`);
  }

  public getIntelligenceReport() {
    const total = this.conversionHistory.length;
    const successes = this.conversionHistory.filter(h => h.success).length;
    return {
      totalInteractions: total,
      successRate: total > 0 ? (successes / total) * 100 : 0,
      learnedSignals: [...new Set(this.conversionHistory.map(h => h.signal))]
    };
  }
}
