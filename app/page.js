'use client';

import { useState } from 'react';

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
        </div>
      )}
    </header>
  );
};

const HeroSection = () => (
  <section className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 py-20 md:py-32">
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
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
  <section id="about" className="py-20 md:py-32 bg-white dark:bg-slate-950">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">
        Über mich
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-64 md:h-96 rounded-lg"></div>
      </div>
    </div>
  </section>
);

const SkillsSection = () => {
  const skills = [
    { category: 'Lorem Ipsum', items: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'] },
    { category: 'Dolor Sit', items: ['Skill 6', 'Skill 7', 'Skill 8', 'Skill 9', 'Skill 10'] },
    { category: 'Amet Consectetur', items: ['Skill 11', 'Skill 12', 'Skill 13', 'Skill 14', 'Skill 15'] },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">
          Meine Fähigkeiten
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const Footer = () => (
  <footer className="bg-slate-900 dark:bg-black text-gray-300 py-8">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p>© 2025 Mein Portfolio. Alle Rechte vorbehalten.</p>
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
      <Footer />
    </div>
  );
}






