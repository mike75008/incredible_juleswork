"use client";

import React from 'react';
import { TrendingUp, Euro } from 'lucide-react';
import { mockDeals, mockProspects } from '@/data/mockData';
import { cn } from '@/lib/utils';

const stages = [
  { key: 'discovery', label: 'Découverte', color: 'border-blue-400' },
  { key: 'proposal', label: 'Proposition', color: 'border-yellow-400' },
  { key: 'negotiation', label: 'Négociation', color: 'border-orange-400' },
  { key: 'closed_won', label: 'Gagné', color: 'border-green-400' },
  { key: 'closed_lost', label: 'Perdu', color: 'border-gray-300' },
] as const;

export default function DealsPage() {
  const dealsWithProspect = mockDeals.map(deal => ({
    ...deal,
    prospect: mockProspects.find(p => p.id === deal.prospectId),
  }));

  const totalPipeline = mockDeals.reduce((sum, d) => sum + d.estimatedValue, 0);
  const wonDeals = mockDeals.filter(d => d.stage === 'closed_won');
  const totalWon = wonDeals.reduce((sum, d) => sum + d.estimatedValue, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Deals</h1>
          <p className="text-sm text-gray-500">Pipeline commercial en cours.</p>
        </div>
        <button className="btn-gold flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Nouveau deal
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Deals actifs</p>
          <p className="text-3xl font-bold text-gray-900">{mockDeals.length}</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Pipeline total</p>
          <p className="text-3xl font-bold text-gray-900">{totalPipeline.toLocaleString('fr-FR')} €</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Revenus gagnés</p>
          <p className="text-3xl font-bold text-green-600">{totalWon.toLocaleString('fr-FR')} €</p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {stages.map(stage => {
          const stageDeals = dealsWithProspect.filter(d => d.stage === stage.key);
          return (
            <div key={stage.key} className="space-y-3">
              <div className={cn("bg-white border-t-4 rounded-lg px-4 py-3 shadow-sm", stage.color)}>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">{stage.label}</p>
                <p className="text-lg font-bold text-gray-900 mt-0.5">{stageDeals.length}</p>
              </div>
              <div className="space-y-2">
                {stageDeals.length === 0 ? (
                  <div className="bg-gray-50 border border-dashed border-gray-200 rounded-lg p-4 text-center">
                    <p className="text-xs text-gray-400">Aucun deal</p>
                  </div>
                ) : (
                  stageDeals.map(deal => (
                    <div key={deal.id} className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-sm font-bold text-gray-900 mb-1">{deal.prospect?.name ?? '—'}</p>
                      <p className="text-xs text-gray-500 mb-2">{deal.prospect?.city} • {deal.prospect?.sector}</p>
                      <div className="flex items-center gap-1 text-sm font-bold text-brand-red">
                        <Euro className="w-3.5 h-3.5" />
                        {deal.estimatedValue.toLocaleString('fr-FR')}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
