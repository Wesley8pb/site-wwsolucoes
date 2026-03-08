'use client';

import { motion } from 'motion/react';
import { BookOpen, Bot, Calendar, Database, Scale, ChevronRight, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 selection:bg-zinc-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#FAFAFA]/90 backdrop-blur-md z-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-semibold tracking-wide">
            WW SOLUÇÕES
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <a href="#cursos" className="hover:text-zinc-900 transition-colors">Cursos</a>
            <a href="#servicos" className="hover:text-zinc-900 transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-zinc-900 transition-colors">Sobre</a>
          </div>
          <a href="#cursos" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors">
            Ver Aulão
          </a>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 md:pt-40 md:pb-48 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-600 mb-8 uppercase tracking-widest">
              <Scale className="w-3.5 h-3.5" />
              <span>Inovação Jurídica</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight mb-8 text-zinc-900">
              Inteligência Artificial aplicada ao <span className="italic text-zinc-500">Direito Eleitoral</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Capacitação de excelência e desenvolvimento de agentes autônomos para otimizar a prática jurídica eleitoral e cível.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#cursos" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-all group">
                Conhecer o Aulão
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#servicos" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium bg-white text-zinc-900 border border-zinc-200 rounded-full hover:bg-zinc-50 transition-colors">
                Agentes Personalizados
              </a>
            </div>
          </motion.div>
        </section>

        {/* Featured Course Section */}
        <section id="cursos" className="py-24 bg-white border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-4">Destaque do Momento</div>
                <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 leading-tight">Mergulhando no MinutaIA com modo agêntico</h2>
                <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                  Um aulão exclusivo focado em dominar a ferramenta MinutaIA utilizando o poder dos agentes autônomos. Aprenda a automatizar a criação de peças jurídicas com precisão e eficiência incomparáveis.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Compreensão profunda do modo agêntico',
                    'Automação de minutas e peças eleitorais',
                    'Aumento exponencial de produtividade',
                    'Acesso a materiais complementares'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-700">
                      <CheckCircle2 className="w-5 h-5 text-zinc-900 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-all">
                  Garantir minha vaga
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square md:aspect-[4/5] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/law/800/1000?grayscale')] opacity-10 mix-blend-multiply object-cover" />
                <div className="relative z-10 text-center p-8">
                  <BookOpen className="w-16 h-16 text-zinc-900 mx-auto mb-6 opacity-80" />
                  <div className="font-serif text-3xl font-medium text-zinc-900">Aulão<br/>MinutaIA</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-24 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Soluções Sob Medida</h2>
              <p className="text-zinc-600 text-lg">
                Desenvolvemos agentes de Inteligência Artificial personalizados para atender às necessidades específicas do seu escritório ou cartório.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 rounded-3xl border border-zinc-200 hover:shadow-md transition-shadow"
              >
                <Bot className="w-10 h-10 text-zinc-900 mb-6" />
                <h3 className="font-serif text-2xl font-medium mb-4">Agentes para Direito Eleitoral</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Automação de rotinas cartorárias, análise de jurisprudência eleitoral, triagem de documentos e suporte na elaboração de pareceres técnicos com alto rigor jurídico.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-10 rounded-3xl border border-zinc-200 hover:shadow-md transition-shadow"
              >
                <Scale className="w-10 h-10 text-zinc-900 mb-6" />
                <h3 className="font-serif text-2xl font-medium mb-4">Agentes para Direito Cível</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Sistemas inteligentes para revisão de contratos, acompanhamento processual, geração de minutas padronizadas e pesquisa ágil de precedentes nos tribunais superiores.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-24 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5">
                <div className="aspect-[3/4] bg-zinc-800 rounded-3xl overflow-hidden relative">
                  <Image
                    src="https://picsum.photos/seed/professional/800/1066?grayscale"
                    alt="Wesley Brito"
                    fill
                    className="object-cover opacity-60 mix-blend-luminosity"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="md:col-span-7 md:pl-8">
                <div className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-4">O Instrutor</div>
                <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Wesley Brito</h2>
                <div className="space-y-6 text-zinc-300 text-lg leading-relaxed mb-10">
                  <p>
                    Chefe de cartório da 56ª Zona Eleitoral da Paraíba. Técnico Judiciário graduado em Gestão Pública e pós-graduado em Direito Eleitoral.
                  </p>
                  <p>
                    Pioneiro na integração de Inteligência Artificial no setor público eleitoral, é criador de diversos agentes de automação e suporte que transformam a rotina jurídica.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <a href="https://github.com/Wesley8pb/ELIS" target="_blank" rel="noopener noreferrer" className="group block p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700 hover:bg-zinc-800 transition-colors">
                    <Bot className="w-6 h-6 text-zinc-100 mb-4" />
                    <h4 className="font-medium text-white mb-2 flex items-center justify-between">
                      Projeto ELIS
                      <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                    </h4>
                    <p className="text-sm text-zinc-400">Agente de suporte especializado no Direito Eleitoral.</p>
                  </a>
                  <a href="https://calendario-eleitoral-2026.netlify.app/" target="_blank" rel="noopener noreferrer" className="group block p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700 hover:bg-zinc-800 transition-colors">
                    <Calendar className="w-6 h-6 text-zinc-100 mb-4" />
                    <h4 className="font-medium text-white mb-2 flex items-center justify-between">
                      Calendário Interativo
                      <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                    </h4>
                    <p className="text-sm text-zinc-400">Calendário eleitoral interativo para o ano de 2026.</p>
                  </a>
                  <div className="group block p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700 sm:col-span-2">
                    <Database className="w-6 h-6 text-zinc-100 mb-4" />
                    <h4 className="font-medium text-white mb-2">Sistema de Inventário</h4>
                    <p className="text-sm text-zinc-400">Criador do sistema de inventário do arquivo único do TRE-PB, otimizando a gestão documental.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-serif text-xl font-semibold">WW SOLUÇÕES</div>
          <div className="flex items-center gap-6 text-zinc-500">
            <a href="mailto:contato@wwsolucoes.com" className="hover:text-zinc-900 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contato@wwsolucoes.com</span>
            </a>
          </div>
          <div className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} WW Soluções. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
