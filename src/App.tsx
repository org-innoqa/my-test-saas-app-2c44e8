import React from 'react';
import { Layout, Zap, Shield, Smartphone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">BrandName</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Get Started</button>
        </nav>
      </header>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12">
        <section className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6">Build your future with us.</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">We provide the tools you need to scale your business efficiently and securely.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          {[ 
            { icon: Zap, title: 'Fast Performance', desc: 'Optimized for speed and efficiency.' },
            { icon: Shield, title: 'Secure Data', desc: 'Enterprise-grade security for your peace of mind.' },
            { icon: Smartphone, title: 'Mobile Ready', desc: 'Responsive design for all devices.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <item.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} BrandName Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}