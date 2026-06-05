"use client";

import React from 'react';
import {
  Settings,
  Key,
  Target,
  Volume2,
  Shield,
  Bell,
  Save,
  Zap,
  Globe,
  Mail
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
        <p className="text-sm text-gray-500">Configurez votre instance de prospection et vos préférences IA.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <nav className="space-y-1">
            {[
              { name: 'Général', icon: Settings, current: true },
              { name: 'Clés API', icon: Key, current: false },
              { name: 'Préférences Détection', icon: Target, current: false },
              { name: 'Ton de l\'IA', icon: Volume2, current: false },
              { name: 'Sécurité', icon: Shield, current: false },
              { name: 'Notifications', icon: Bell, current: false },
            ].map((item) => (
              <button
                key={item.name}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  item.current
                    ? "bg-brand-red text-white"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="card-premium p-6 space-y-6">
            <h3 className="text-lg font-bold border-b border-gray-100 pb-4">Configuration des Sources</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-bold">Google Maps Scraper</p>
                    <p className="text-xs text-gray-500">Extraction des TPE locales sans site web.</p>
                  </div>
                </div>
                <div className="relative inline-flex h-5 w-10 items-center rounded-full bg-brand-gold">
                  <span className="inline-block h-3 w-3 translate-x-6 rounded-full bg-white transition" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-brand-red" />
                  <div>
                    <p className="text-sm font-bold">Infogreffe Real-time</p>
                    <p className="text-xs text-gray-500">Détection des nouvelles immatriculations.</p>
                  </div>
                </div>
                <div className="relative inline-flex h-5 w-10 items-center rounded-full bg-brand-gold">
                  <span className="inline-block h-3 w-3 translate-x-6 rounded-full bg-white transition" />
                </div>
              </div>
            </div>
          </div>

          <div className="card-premium p-6 space-y-6">
            <h3 className="text-lg font-bold border-b border-gray-100 pb-4">Identité de l'Agence</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Nom de l'Agence</label>
                <input
                  type="text"
                  defaultValue="Web Agency Pro"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Email de Contact</label>
                <input
                  type="email"
                  defaultValue="contact@agencypro.fr"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Ton de l'Outreach (IA)</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20">
                <option>Professionnel & Analytique (Recommandé)</option>
                <option>Direct & Dynamique</option>
                <option>Empathique & Expert</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="btn-gold flex items-center gap-2 px-8">
              <Save className="w-4 h-4" />
              Sauvegarder les modifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
