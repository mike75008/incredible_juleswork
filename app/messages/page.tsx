"use client";

import React from 'react';
import {
  MessageSquare,
  Mail,
  LinkIcon,
  CheckCircle2,
  Clock,
  ExternalLink,
  Eye,
  Reply
} from 'lucide-react';
import { mockMessages, mockProspects } from '@/data/mockData';
import { cn } from '@/lib/utils';

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Historique des Messages</h1>
          <p className="text-sm text-gray-500">Suivez vos interactions et le taux d'engagement de vos campagnes.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Envoyés', value: '42', icon: Mail, color: 'text-brand-red' },
          { label: 'Taux d\'Ouverture', value: '68%', icon: Eye, color: 'text-blue-600' },
          { label: 'Taux de Réponse', value: '24%', icon: Reply, color: 'text-green-600' },
          { label: 'Messages LinkedIn', value: '15', icon: LinkIcon, color: 'text-sky-600' },
        ].map((stat) => (
          <div key={stat.label} className="card-premium p-4">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className={cn("w-5 h-5", stat.color)} />
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">+5%</span>
            </div>
            <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Prospect</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Type</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Date d'envoi</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Ouvert</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Répondu</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockMessages.map((msg) => {
              const prospect = mockProspects.find(p => p.id === msg.prospectId);
              return (
                <tr key={msg.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-gray-900">{prospect?.name || 'Inconnu'}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {msg.type === 'email' ? <Mail className="w-4 h-4 text-brand-red" /> : <LinkIcon className="w-4 h-4 text-sky-600" />}
                      <span className="text-xs font-medium capitalize">{msg.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(msg.sendDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {msg.opened ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-50 text-green-700">
                        <CheckCircle2 className="w-3 h-3" /> OUI
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-gray-400">NON</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {msg.replied ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700">
                        <Reply className="w-3 h-3" /> RÉPONDU
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-gray-400">EN ATTENTE</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 hover:bg-gray-100 rounded text-gray-400">
                      <Eye className="w-4 h-4" />
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
