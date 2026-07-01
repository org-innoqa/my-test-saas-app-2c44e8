import React from 'react';
import { Coffee, BookOpen, Award } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] text-stone-800">
      <header className="border-b border-stone-200">
        <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-amber-900">Anatolia Coffee Roasters</h1>
          <div className="space-x-6 font-medium">
            <a href="#" className="hover:text-amber-700">Shop</a>
            <a href="#" className="hover:text-amber-700">Fieldnotes</a>
            <button className="bg-amber-900 text-white px-5 py-2 rounded-full hover:bg-amber-800 transition">Order Now</button>
          </div>
        </nav>
      </header>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16">
        <section className="text-center mb-20">
          <p className="text-amber-700 font-semibold tracking-widest uppercase text-sm mb-4">Small Batch, Big Soul</p>
          <h2 className="text-6xl font-serif font-bold text-stone-900 mb-6">Crafting the perfect cup, one bean at a time.</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">From our roastery to your home, experience the artisanal difference of single-origin specialty coffee.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          {[ 
            { icon: Coffee, title: 'Single-Origin Beans', desc: 'Ethically sourced, expertly roasted.' },
            { icon: Award, title: 'Brewing Classes', desc: 'Master the art of the perfect pour-over.' },
            { icon: BookOpen, title: 'Fieldnotes', desc: 'Stories from the world of coffee and design.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition">
              <item.icon className="w-10 h-10 text-amber-700 mb-6" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-serif italic mb-2">"Coffee is a language in itself."</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} Anatolia Coffee Roasters. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}