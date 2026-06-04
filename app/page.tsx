import React from 'react';
import {
  Users,
  TrendingUp,
  MessageCircle,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { mockProspects, mockDeals } from '@/data/mockData';

const stats = [
  { name: 'Total Prospects', value: mockProspects.length.toString(), icon: Users, change: '+12%', changeType: 'increase' },
  { name: 'Deals en cours', value: mockDeals.length.toString(), icon: TrendingUp, change: '+2', changeType: 'increase' },
  { name: 'Messages envoyés', value: '42', icon: MessageCircle, change: '+18%', changeType: 'increase' },
  { name: 'Score moyen', value: '78%', icon: Zap, change: '+5%', changeType: 'increase' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord</h1>
        <p className="text-gray-500">Bienvenue dans votre centre de commandement AgencyPro.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="card-premium p-6">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-gray-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-brand-red" />
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                stat.changeType === 'increase' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Prospects Récents</h2>
            <button className="text-sm text-brand-red font-semibold flex items-center gap-1 hover:underline">
              Tout voir <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {mockProspects.slice(0, 4).map((prospect) => (
              <div key={prospect.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-red/10 rounded flex items-center justify-center text-brand-red font-bold">
                    {prospect.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{prospect.name}</p>
                    <p className="text-xs text-gray-500">{prospect.sector} • {prospect.city}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">{prospect.qualificationScore}%</p>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Score Qualif.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Activité IA</h2>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-gray-500 font-medium">L'agent apprend...</span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-4 bg-brand-red/[0.02] border border-brand-red/10 rounded-lg">
              <p className="text-sm text-gray-800 italic">
                "J'ai identifié que les prospects du secteur <strong>Luxe</strong> répondent mieux aux messages mettant l'accent sur <strong>l'optimisation technique</strong>."
              </p>
              <p className="mt-2 text-xs text-brand-red font-bold">— Rapport d'Intelligence</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Signaux Détectés (Dernières 24h)</h3>
              <div className="flex flex-wrap gap-2">
                {['Sans site', 'Site obsolète', 'Recrutement', 'Nouveau SIRET'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
