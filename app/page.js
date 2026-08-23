'use client';

import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-slate-900 dark:text-white">
          Portfolio
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">
            Über mich
          </a>
          <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">
            Fähigkeiten
          </a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">
            Projekte
          </a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">
            Kontakt
          </a>
        </div>
        <button
          className="md:hidden bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-slate-50 dark:bg-slate-900 px-6 py-4 flex flex-col gap-4">
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">
            Über mich
          </a>
          <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">
            Fähigkeiten
          </a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">
            Projekte
          </a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">
            Kontakt
          </a>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => (
  <section className="py-20 md:py-32">
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Timo Nobs
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Ich bin ein lernender Webentwickler an der IMS in Hottingen. Ich arbeite mit next.js, Datenbanken und habe auch Grundkenntnisse in anderen Programmiersprachen.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#about"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Über mich
          </a>
          <a
            href="#skills"
            className="bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Fähigkeiten
          </a>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20 md:py-32 border-t border-gray-200 dark:border-slate-800">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">
        Über mich
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
            Hi, ich bin Timo Nobs. Ich besuche aktuell die Informatikmittelschule in Zürich Hottingen und habe grosses Interesse an Datenbanken so wie diversen Programmiersprachen im Front- sowie Backend.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Ich arbeite gerne im Team und löse zuverlässig meine Aufgaben.
          </p>
        </div>
        <div className="relative h-64 md:h-96 rounded-lg border border-gray-200 dark:border-slate-800 overflow-hidden">
          <Image
              src="/img.png"
              alt="Timo Nobs"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>
    </div>
  </section>
);

const SkillsSection = () => {
  const variantClasses = {
    primary:
      'bg-blue-50 text-blue-700 ring-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:ring-blue-800/50',
    success:
      'bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-900/25 dark:text-emerald-200 dark:ring-emerald-800/50',
    violet:
      'bg-violet-50 text-violet-700 ring-violet-200 dark:bg-violet-900/25 dark:text-violet-200 dark:ring-violet-800/50',
    neutral:
      'bg-slate-50 text-slate-700 ring-slate-200 dark:bg-slate-700/30 dark:text-slate-100 dark:ring-slate-600/60',
    warning:
      'bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-900/20 dark:text-amber-200 dark:ring-amber-800/50',
  };

  const SkillToken = ({ label, variant = 'neutral' }) => (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ring-1 ring-inset select-none whitespace-nowrap ${
        variantClasses[variant] || variantClasses.neutral
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {label}
    </span>
  );

  const skills = [
    {
      category: 'Frontend',
      accentClass: 'border-t-blue-500',
      items: [
        { label: 'React', variant: 'violet' },
        { label: 'Next.js', variant: 'violet' },
        { label: 'Tailwind CSS', variant: 'violet' },
        { label: 'HTML', variant: 'neutral' },
        { label: 'CSS', variant: 'neutral' },
      ],
    },
    {
      category: 'Backend',
      accentClass: 'border-t-emerald-500',
      items: [
        { label: 'Python', variant: 'success' },
        { label: 'Java', variant: 'success' },
        { label: 'REST APIs', variant: 'success' },
        { label: 'SQL', variant: 'warning' },
        { label: 'NoSQL', variant: 'warning' },
      ],
    },
    {
      category: 'Tools',
      accentClass: 'border-t-violet-500',
      items: [
        { label: 'Kubernetes', variant: 'violet' },
        { label: 'Bash', variant: 'violet' },
        { label: 'PowerShell', variant: 'violet' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">
          Meine Fähigkeiten
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className={`bg-white dark:bg-slate-800 p-8 rounded-xl border border-gray-200 dark:border-slate-700 border-t-4 ${skillGroup.accentClass} transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30`}
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {skillGroup.category}
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400">Beispiele</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <SkillToken key={i} label={skill.label} variant={skill.variant} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Projekt 1 Portfolio / Landing Page',
      description:
        'Das Ziel war es eine funktionales Portfolio zu erstellen um mich damit Bewerben zu können und ein bisschen neues auszuprobieren.',
      tags: ['Next.js', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Projekt 2 Daily Puzzle',
      description:
        'Mein Ziel ist es ein kleines Spiel zu erstellen das wie Wordle funktioniert und das ich mit Datenbanken experimentieren konnte. Das ist ein neues Projekt und braucht noch seine Zeit.',
      tags: ['Next.js', 'SQL'],
    },
    {
      title: 'Projekt 3 Mini Taskplaner',
      description:
        'Kleines begonnenes Schulprojekt',
      tags: ['Java','Spring Boot'],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">
          Projekte
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <article key={idx} className="bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-sm bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-32 border-t border-gray-200 dark:border-slate-800">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Kontakt
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center mb-10">
        Wenn Sie Fragen haben oder mit mir zusammenarbeiten möchten, können Sie mich gerne über die untenstehenden Kontaktinformationen erreichen.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Github</h3>
          <p className="text-gray-600 dark:text-gray-300">https://github.com/im24b-nobst</p>
        </div>
        <div className="bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Email</h3>
          <p className="text-gray-600 dark:text-gray-300">timo.nobs@gmail.com</p>
        </div>
      </div>
    </div>
  </section>
);



const Footer = () => (
  <footer className="bg-slate-900 dark:bg-black text-gray-300 py-8">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p>© 2026 Mein Portfolio. Alle Rechte vorbehalten.</p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}






