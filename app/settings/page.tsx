"use client";

import React, { useState } from 'react';
import { Settings, Key, Radar, MessageSquare, Save } from 'lucide-react';

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
        <p className="text-sm text-gray-500">Configuration du système de détection et d'outreach.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-2xl">
        <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Key className="w-4 h-4 text-brand-red" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700">Clés API</h2>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Claude API (Anthropic)</label>
              <input type="password" placeholder="sk-ant-..." className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">SendGrid (emails)</label>
              <input type="password" placeholder="SG...." className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">LinkedIn API</label>
              <input type="password" placeholder="Token LinkedIn..." className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Radar className="w-4 h-4 text-brand-red" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700">Détection</h2>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Zone géographique</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red">
                <option>France entière</option>
                <option>Île-de-France</option>
                <option>PACA</option>
                <option>Auvergne-Rhône-Alpes</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">Sources actives</label>
              <div className="space-y-2">
                {['Google Maps', 'Infogreffe', 'LinkedIn', 'Indeed / APEC'].map(source => (
                  <label key={source} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input type="checkbox" defaultChecked className="accent-brand-red" />
                    {source}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-4 h-4 text-brand-red" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700">Ton de l'outreach</h2>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Style des messages</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red">
                <option>Direct et percutant</option>
                <option>Professionnel et sobre</option>
                <option>Chaleureux et humain</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Signature email</label>
              <textarea rows={3} placeholder="Votre nom, agence, contact..." className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red resize-none" />
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="btn-gold flex items-center gap-2 w-fit"
        >
          <Save className="w-4 h-4" />
          {saved ? 'Sauvegardé !' : 'Sauvegarder'}
        </button>
      </div>
    </div>
  );
}
