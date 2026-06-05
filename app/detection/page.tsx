"use client";

import React from 'react';
import { Radar, Globe, Clock, MapPin, Building2 } from 'lucide-react';
import { mockProspects } from '@/data/mockData';
import { cn } from '@/lib/utils';

const signalLabels: Record<string, { label: string; color: string }> = {
  no_website: { label: 'Sans site', color: 'bg-red-50 text-red-700 border-red-100' },
  outdated_website: { label: 'Site obsolète', color: 'bg-orange-50 text-orange-700 border-orange-100' },
  job_offer: { label: 'Recrutement', color: 'bg-blue-50 text-blue-700 border-blue-100' },
  new_registration: { label: 'Nouveau SIRET', color: 'bg-purple-50 text-purple-700 border-purple-100' },
};

const sourceMap: Record<string, string> = {
  no_website: 'Google Maps',
  outdated_website: 'Analyse web',
  job_offer: 'LinkedIn / Indeed',
  new_registration: 'Infogreffe',
};

export default function DetectionPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Détection</h1>
          <p className="text-sm text-gray-500">Signaux captés sur les dernières 24h.</p>
        </div>
        <button className="btn-gold flex items-center gap-2">
          <Radar className="w-4 h-4" />
          Lancer un scan
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {Object.entries(signalLabels).map(([key, val]) => {
          const count = mockProspects.filter(p => p.detectedSignal === key).length;
          return (
            <div key={key} className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{val.label}</p>
              <p className="text-3xl font-bold text-gray-900">{count}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Entreprise</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Signal</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Ville</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Source</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Détecté le</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockProspects.map((prospect) => {
              const sig = signalLabels[prospect.detectedSignal];
              return (
                <tr key={prospect.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-brand-red" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{prospect.name}</p>
                        <p className="text-xs text-gray-500">{prospect.sector}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn("inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border", sig.color)}>
                      {sig.label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-3.5 h-3.5" />
                      {prospect.city}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Globe className="w-3.5 h-3.5" />
                      {sourceMap[prospect.detectedSignal]}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(prospect.lastActivityDate).toLocaleDateString('fr-FR')}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
