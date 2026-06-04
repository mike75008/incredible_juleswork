"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Globe,
  LinkIcon,
  MapPin,
  Calendar,
  Send,
  Zap,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { mockProspects } from '@/data/mockData';
import { ProspectingAgent } from '@/lib/agent';
import { cn } from '@/lib/utils';

export default function ProspectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const prospect = mockProspects.find(p => p.id === params.id);

  if (!prospect) return <div className="p-8">Prospect non trouvé</div>;

  const agent = new ProspectingAgent();
  const generatedMessage = agent.generateMessage(prospect);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour aux prospects
      </button>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-brand-red text-white rounded-xl flex items-center justify-center text-3xl font-bold">
            {prospect.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{prospect.name}</h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="flex items-center gap-1 text-sm text-gray-500"><MapPin className="w-3 h-3" /> {prospect.city}</span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-brand-red font-semibold">{prospect.sector}</span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-500">{prospect.companySize} employés</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50 font-medium text-sm">Modifier</button>
          <button className="btn-gold">Passer en Deal</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Intelligence Section */}
          <div className="card-premium overflow-hidden">
            <div className="bg-gray-900 p-4 flex items-center justify-between">
              <h2 className="text-white font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand-gold" />
                Analyse de l'Intelligence
              </h2>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Temps Réel</span>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Signal Détecté</p>
                  <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
                    <p className="text-sm font-bold text-red-700">{prospect.detectedSignal.replace('_', ' ').toUpperCase()}</p>
                    <p className="text-xs text-red-600/70 mt-1">Niveau d'urgence élevé (douleur immédiate détectée).</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Fraîcheur du Signal</p>
                  <div className="p-3 bg-orange-50 border border-orange-100 rounded-lg">
                    <p className="text-sm font-bold text-orange-700">{prospect.freshnessScore}/100</p>
                    <p className="text-xs text-orange-600/70 mt-1">Signal capturé il y a moins de 48h.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-3">Recommandation de l'Agent</h3>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-sm leading-relaxed text-gray-700 italic">
                    "L'entreprise est en phase de croissance mais son absence digitale freine son acquisition locale.
                    Le message doit insister sur la <strong>perte de revenus quotidienne</strong> face aux concurrents de {prospect.city}."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Message Generator */}
          <div className="card-premium p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold">Message Hyper-Personnalisé</h2>
              <button className="text-brand-red text-xs font-bold flex items-center gap-1 uppercase tracking-wider hover:opacity-80">
                <Zap className="w-3 h-3" /> Régénérer
              </button>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 font-mono text-sm whitespace-pre-wrap">
              {generatedMessage}
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50 text-sm font-medium">
                <LinkIcon className="w-4 h-4" /> Message LinkedIn
              </button>
              <button className="flex items-center gap-2 px-6 py-2 bg-brand-red text-white rounded-md hover:bg-red-700 text-sm font-bold shadow-lg shadow-red-200">
                <Send className="w-4 h-4" /> Envoyer par Email
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="card-premium p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Infos Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-50 rounded flex items-center justify-center text-gray-400"><Globe className="w-4 h-4" /></div>
                <span className="text-sm font-medium text-gray-600">Aucun site web</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-50 rounded flex items-center justify-center text-gray-400"><LinkIcon className="w-4 h-4" /></div>
                <span className="text-sm font-medium text-brand-red hover:underline cursor-pointer">Profil LinkedIn trouvé</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-50 rounded flex items-center justify-center text-gray-400"><Calendar className="w-4 h-4" /></div>
                <span className="text-sm font-medium text-gray-600">Ajouté le {new Date(prospect.lastActivityDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="card-premium p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Séquence Automatique</h2>
            <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-gray-100">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white ring-4 ring-white">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm font-bold">Contact Initial</p>
                <p className="text-xs text-gray-500">Génération effectuée</p>
              </div>
              <div className="relative pl-8 opacity-50">
                <div className="absolute left-0 top-0 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 ring-4 ring-white">
                  <AlertCircle className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm font-bold">Relance J+3</p>
                <p className="text-xs text-gray-500">Prévue le 07/06</p>
              </div>
              <div className="relative pl-8 opacity-50">
                <div className="absolute left-0 top-0 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 ring-4 ring-white">
                  <AlertCircle className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm font-bold">Relance J+7</p>
                <p className="text-xs text-gray-500">Prévue le 11/06</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
