"use client";

import React from 'react';
import Link from 'next/link';
import {
  Search,
  Filter,
  MoreVertical,
  ExternalLink,
  Mail,
  Zap,
  Flame
} from 'lucide-react';
import { mockProspects } from '@/data/mockData';
import { cn } from '@/lib/utils';

export default function ProspectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Prospects</h1>
          <p className="text-sm text-gray-500">Gérez vos opportunités et suivez les scores de fraîcheur.</p>
        </div>
        <button className="btn-gold flex items-center gap-2">
          <Search className="w-4 h-4" />
          Lancer une détection
        </button>
      </div>

      <div className="flex gap-4 items-center bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher une entreprise, un secteur, une ville..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50 text-sm font-medium">
          <Filter className="w-4 h-4" />
          Filtres
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Entreprise</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Signal Détecté</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-center">Score Qualif.</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-center">Fraîcheur</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Statut</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockProspects.map((prospect) => (
              <tr key={prospect.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <Link href={`/prospects/${prospect.id}`} className="group">
                    <p className="text-sm font-bold text-gray-900 group-hover:text-brand-red transition-colors">{prospect.name}</p>
                    <p className="text-xs text-gray-500">{prospect.city} • {prospect.sector}</p>
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100">
                    {prospect.detectedSignal.replace('_', ' ')}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          prospect.qualificationScore > 80 ? "bg-green-500" : "bg-brand-gold"
                        )}
                        style={{ width: `${prospect.qualificationScore}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] mt-1 font-bold">{prospect.qualificationScore}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-1">
                    <Flame className={cn(
                      "w-4 h-4",
                      prospect.freshnessScore > 90 ? "text-orange-500" : "text-gray-300"
                    )} />
                    <span className="text-sm font-bold">{prospect.freshnessScore}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
                    prospect.status === 'new' ? "bg-purple-50 text-purple-700" :
                    prospect.status === 'contacted' ? "bg-blue-50 text-blue-700" :
                    "bg-gray-50 text-gray-700"
                  )}>
                    {prospect.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded text-gray-400">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded text-gray-400">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
