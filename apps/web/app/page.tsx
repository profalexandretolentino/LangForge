"use client"; // Necessário para usar useState no Next.js App Router

import { useState } from "react";
import { APP_NAME, userProfile, JLPT_REQUIREMENTS, JLPTLevel } from "@langforge/shared";
import { Book, Layers, Type, Clock, Flame, GraduationCap, PlayCircle } from "lucide-react";

export default function Home() {
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel>(userProfile.targetLevel);
  
  const requirements = JLPT_REQUIREMENTS[selectedLevel];
  const levels: JLPTLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-zinc-950 font-sans text-slate-900 dark:text-zinc-100">
      {/* Top Nav */}
      <nav className="border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">L</div>
            <span className="font-bold tracking-tight text-xl">{APP_NAME}</span>
          </div>
          <div className="flex items-center gap-1 text-orange-500 font-bold bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-full">
            <Flame size={18} />
            <span>{userProfile.dailyStreak} dias</span>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Coluna Principal */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Seletor de Nível (Radio Buttons) */}
          <section className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-sm">
            <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 tracking-widest">Selecione o Nível para Explorar</h3>
            <div className="flex flex-wrap gap-3">
              {levels.map((level) => (
                <label key={level} className="cursor-pointer">
                  <input 
                    type="radio" 
                    name="jlpt" 
                    value={level} 
                    className="hidden peer"
                    checked={selectedLevel === level}
                    onChange={() => setSelectedLevel(level)}
                  />
                  <div className="px-6 py-3 rounded-2xl border-2 border-slate-100 dark:border-zinc-800 font-bold transition-all
                    peer-checked:border-red-600 peer-checked:bg-red-50 peer-checked:text-red-600 
                    dark:peer-checked:bg-red-950/30 hover:bg-slate-50 dark:hover:bg-zinc-800">
                    {level}
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* Dados do Nível Selecionado */}
          <section className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 overflow-hidden shadow-sm">
            <div className="bg-slate-50 dark:bg-zinc-800/50 p-6 border-b border-slate-200 dark:border-zinc-800 flex justify-between items-center">
              <h2 className="text-xl font-bold italic">Requisitos para o {selectedLevel}</h2>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded font-bold">Oficial (Est.)</span>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600"><Book size={20}/></div>
                  <span className="font-medium">Vocabulário</span>
                </div>
                <span className="text-xl font-black">{requirements.vocabulary.toLocaleString()} palavras</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-600"><Type size={20}/></div>
                  <span className="font-medium">Kanjis</span>
                </div>
                <span className="text-xl font-black">{requirements.kanji.toLocaleString()} caracteres</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600"><Layers size={20}/></div>
                  <span className="font-medium">Gramática</span>
                </div>
                <span className="text-xl font-black">~{requirements.grammarPoints} pontos</span>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 dark:border-zinc-800 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600"><Clock size={20}/></div>
                  <span className="font-medium">Tempo Médio de Estudo</span>
                </div>
                <span className="text-xl font-black text-emerald-600">{requirements.studyHours} horas</span>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <section className="bg-zinc-900 rounded-3xl p-6 text-white shadow-xl">
             <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="text-red-500" />
                <h3 className="font-bold">Meu Roadmap</h3>
             </div>
             <p className="text-sm text-zinc-400 mb-6 italic leading-relaxed">
               "Alexandre, do {userProfile.currentLevel} ao {userProfile.targetLevel} são aproximadamente 750h de foco."
             </p>
             <button className="w-full py-4 bg-red-600 hover:bg-red-700 rounded-2xl font-bold transition-all flex items-center justify-center gap-2">
                <PlayCircle size={20} />
                Continuar Estudo
             </button>
          </section>

          <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800">
             <h4 className="text-xs font-black uppercase text-slate-400 tracking-tighter mb-2">Build Log</h4>
             <p className="text-[10px] font-mono text-slate-500">v1.1.0-alpha: Shared data sync active.</p>
          </div>
        </div>

      </main>
    </div>
  );
}