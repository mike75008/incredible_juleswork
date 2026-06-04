"use client";

import React from 'react';
import {
  Radar,
  MapPin,
  Clock,
  ExternalLink,
  Search,
  RefreshCw,
  Globe,
  Briefcase,
  FileText
} from 'lucide-react';
import { mockProspects } from '@/data/mockData';
import { cn } from '@/lib/utils';

export default function DetectionPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Signaux Détectés</h1>
          <p className="text-sm text-gray-500">Intelligence en temps réel sur les opportunités de marché.</p>
        </div>
        <button className="btn-gold flex items-center gap-2">
          <RefreshCw className="w-4 h-4" />
          Scanner le marché
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Signaux aujourd\'hui', value: '12', icon: Radar, color: 'text-brand-red' },
          { label: 'Sources actives', value: '6', icon: Globe, color: 'text-blue-600' },
          { label: 'Taux de pertinence', value: '84%', icon: Search, color: 'text-green-600' },
        ].map((stat) => (
          <div key={stat.label} className="card-premium p-4 flex items-center gap-4">
            <div className={cn("p-2 bg-gray-50 rounded-lg", stat.color)}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Signal</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Entreprise</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Ville</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Date</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Source</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockProspects.map((prospect) => {
              const Icon = prospect.detectedSignal === 'job_offer' ? Briefcase :
                           prospect.detectedSignal === 'no_website' ? Globe :
                           prospect.detectedSignal === 'new_registration' ? FileText : Radar;

              return (
                <tr key={prospect.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-brand-red/5 rounded text-brand-red">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium capitalize">
                        {prospect.detectedSignal.replace('_', ' ')}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-gray-900">{prospect.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {prospect.city}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(prospect.lastActivityDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-600">
                      {prospect.detectedSignal === 'new_registration' ? 'Infogreffe' :
                       prospect.detectedSignal === 'job_offer' ? 'LinkedIn' : 'Google Maps'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-brand-red hover:underline text-sm font-bold">
                      Voir le prospect
                    </button>
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
