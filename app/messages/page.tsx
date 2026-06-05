"use client";

import React from 'react';
import { Mail, MessageCircle, CheckCheck, Clock, Eye } from 'lucide-react';
import { mockMessages, mockProspects } from '@/data/mockData';
import { cn } from '@/lib/utils';

export default function MessagesPage() {
  const messagesWithProspect = mockMessages.map(msg => ({
    ...msg,
    prospect: mockProspects.find(p => p.id === msg.prospectId),
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
          <p className="text-sm text-gray-500">Historique de tous vos envois.</p>
        </div>
        <button className="btn-gold flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Nouveau message
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Envoyés</p>
          <p className="text-3xl font-bold text-gray-900">{mockMessages.length}</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Ouverts</p>
          <p className="text-3xl font-bold text-gray-900">{mockMessages.filter(m => m.opened).length}</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Réponses</p>
          <p className="text-3xl font-bold text-gray-900">{mockMessages.filter(m => m.replied).length}</p>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Prospect</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Canal</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Message</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Date</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-center">Ouvert</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-center">Réponse</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {messagesWithProspect.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-sm text-gray-400">
                  Aucun message envoyé pour l'instant.
                </td>
              </tr>
            ) : (
              messagesWithProspect.map((msg) => (
                <tr key={msg.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-gray-900">{msg.prospect?.name ?? '—'}</p>
                    <p className="text-xs text-gray-500">{msg.prospect?.city}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                      msg.type === 'email'
                        ? "bg-blue-50 text-blue-700 border-blue-100"
                        : "bg-indigo-50 text-indigo-700 border-indigo-100"
                    )}>
                      {msg.type === 'email' ? <Mail className="w-3 h-3" /> : <MessageCircle className="w-3 h-3" />}
                      {msg.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <p className="text-sm text-gray-600 truncate">{msg.content}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(msg.sendDate).toLocaleDateString('fr-FR')}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Eye className={cn("w-4 h-4 mx-auto", msg.opened ? "text-green-500" : "text-gray-200")} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCheck className={cn("w-4 h-4 mx-auto", msg.replied ? "text-brand-gold" : "text-gray-200")} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
