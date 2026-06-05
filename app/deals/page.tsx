"use client";

import React from 'react';
import {
  TrendingUp,
  DollarSign,
  ChevronRight,
  MoreHorizontal,
  Plus
} from 'lucide-react';
import { mockDeals, mockProspects } from '@/data/mockData';
import { cn } from '@/lib/utils';

const STAGES = [
  { id: 'discovery', name: 'Découverte', color: 'bg-blue-500' },
  { id: 'proposal', name: 'Proposition', color: 'bg-purple-500' },
  { id: 'negotiation', name: 'Négociation', color: 'bg-orange-500' },
  { id: 'closed_won', name: 'Gagné', color: 'bg-green-500' },
  { id: 'closed_lost', name: 'Perdu', color: 'bg-gray-500' },
];

export default function DealsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pipeline de Ventes</h1>
          <p className="text-sm text-gray-500">Visualisez et gérez vos opportunités commerciales par étape.</p>
        </div>
        <button className="btn-gold flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Nouveau Deal
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 min-h-[calc(100vh-200px)]">
        {STAGES.map((stage) => {
          const dealsInStage = mockDeals.filter(d => d.stage === stage.id);
          const totalValue = dealsInStage.reduce((acc, d) => acc + d.estimatedValue, 0);

          return (
            <div key={stage.id} className="flex-shrink-0 w-80">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <div className={cn("w-2 h-2 rounded-full", stage.color)}></div>
                  <h3 className="font-bold text-sm text-gray-700 uppercase tracking-wider">{stage.name}</h3>
                  <span className="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full font-bold">
                    {dealsInStage.length}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-gray-50/50 p-2 rounded-lg min-h-[200px] space-y-3 border border-gray-100/50">
                <div className="px-2 py-1 mb-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Valeur Totale</p>
                  <p className="text-sm font-bold text-gray-900">{totalValue.toLocaleString()} €</p>
                </div>

                {dealsInStage.map((deal) => {
                  const prospect = mockProspects.find(p => p.id === deal.prospectId);
                  return (
                    <div key={deal.id} className="card-premium p-4 cursor-grab active:cursor-grabbing">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest">{prospect?.sector}</span>
                        <TrendingUp className="w-3 h-3 text-gray-300" />
                      </div>
                      <p className="text-sm font-bold text-gray-900 mb-1">{prospect?.name}</p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-1 text-sm font-bold text-gray-700">
                          <DollarSign className="w-3.5 h-3.5 text-brand-gold" />
                          {deal.estimatedValue.toLocaleString()} €
                        </div>
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[10px] font-bold">
                          {prospect?.name.charAt(0)}
                        </div>
                      </div>
                    </div>
                  );
                })}

                <button className="w-full py-2 border border-dashed border-gray-200 rounded-lg text-xs font-medium text-gray-400 hover:bg-white hover:border-gray-300 transition-all flex items-center justify-center gap-1">
                  <Plus className="w-3 h-3" /> Ajouter un deal
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
