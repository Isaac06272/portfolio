import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUpRight } from 'react-icons/fi';

function App() {
  return (
    <div className="w-full text-white bg-transparent">
      
      {/* NAVIGATION BAR */}
      <nav className="flex justify-between items-center px-8 lg:px-16 py-8 w-full font-mono text-lg">
        <div className="font-bold tracking-wide flex items-baseline gap-1 text-2xl font-sans">
          Austria
          <span className="w-2 h-2 rounded-full bg-neon"></span>
        </div>
        
        <div className="hidden md:flex gap-10">
          <a className="text-neon border-b-2 border-neon pb-1 cursor-pointer">Home</a>
          <a className="text-gray-400 hover:text-white transition-colors cursor-pointer">Projects</a>
          <a className="text-gray-400 hover:text-white transition-colors cursor-pointer">Certifications</a>
          <a className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</a>
          <a className="text-gray-400 hover:text-white transition-colors cursor-pointer">Skills</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="min-h-[85vh] flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-16 max-w-[1700px] mx-auto w-full py-12 gap-16">
        
        {/* Left Column: Text & Info */}
        <div className="flex-1 space-y-8 z-10 lg:pl-20">
          <div className="space-y-4">
            <p className="text-gray-400 text-lg lg:text-xl font-mono tracking-wide">Fullstack Developer</p>
            <h1 className="text-5xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight font-mono">
              Hello I'm <br />
              <span className="group/name relative inline-block overflow-hidden cursor-default px-2 py-1 mt-1">
                <span className="relative z-10 transition-colors duration-500 text-neon group-hover/name:text-black">
                  AUSTRIA JOHN GWEN ISAAC
                </span>
                <span className="absolute inset-0 bg-neon -translate-x-[105%] group-hover/name:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
              </span>
            </h1>
          </div>

          <div className="text-gray-400 space-y-2 text-base lg:text-lg font-mono leading-relaxed max-w-2xl">
            <p>ML & AI Engineer | Cloud | Data Engineer</p>
            <p>CpE | Philippines</p>
          </div>

          {/* Action Buttons & Socials */}
          <div className="flex flex-wrap items-center gap-6 pt-6">
            <button className="group flex items-center gap-3 border-2 border-neon rounded-full px-8 py-3 text-neon hover:bg-neon hover:text-black transition-colors duration-150 font-mono">
              <span className="text-base font-semibold tracking-wider">VIEW CV</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>

            <div className="flex gap-4">
              <SocialIcon href="mailto:your.email@example.com"><FiMail size={20} /></SocialIcon>
              <SocialIcon href="https://github.com"><FiGithub size={20} /></SocialIcon>
              <SocialIcon href="https://linkedin.com"><FiLinkedin size={20} /></SocialIcon>
              <SocialIcon href="https://instagram.com"><FiInstagram size={20} /></SocialIcon>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Picture */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative group w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] flex justify-center items-center cursor-pointer">
            <svg className="absolute inset-0 w-full h-full animate-[spin_25s_linear_infinite] transition-all duration-500 group-hover:scale-[1.15] group-hover:drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48.5" fill="none" stroke="var(--color-neon)" strokeWidth="0.8" strokeDasharray="30 4 5 4 15 10 40 8 12 5" />
              <circle cx="50" cy="50" r="46" fill="none" stroke="var(--color-neon)" strokeWidth="0.3" strokeDasharray="2 15" className="opacity-40" />
            </svg>
            <div className="w-[87%] h-[87%] rounded-full overflow-hidden bg-[#9785c4] flex items-center justify-center p-2 relative z-10 transition-transform duration-500 group-hover:scale-105">
              <img src="https://via.placeholder.com/800x800" alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
      </main>

      {/* LOWER SCROLLABLE BACKGROUND WRAPPER */}
      <div className="bg-[#0b0c13] relative z-20 w-full">
        
        {/* STATS SECTION */}
        <section className="max-w-[1200px] mx-auto py-16 px-8 lg:px-12 border-b border-gray-800">
          <div className="group flex flex-wrap justify-between items-center gap-8 md:gap-4">
            <StatItem number="22" label="Age" />
            <StatItem number="2" label={<span>Years of<br/>experience</span>} />
            <StatItem number="9" label={<span>Personal<br/>projects</span>} />
            <StatItem number="2" label={<span>Companies<br/>interned</span>} />
          </div>
        </section>

        {/* SELECTED WORK SECTION (Added max-w-[1200px] and side padding) */}
        <section className="max-w-[1200px] mx-auto py-24 px-8 lg:px-12">
          <div className="flex items-center gap-4 text-gray-500 font-mono text-sm tracking-widest uppercase mb-6">
            <span className="w-12 h-[1px] bg-gray-700"></span>
            Selected Work
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-4xl lg:text-5xl font-bold font-sans">Some of my personal projects</h2>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-neon transition-colors font-mono">
              All projects <FiArrowUpRight />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Nappr" 
              year="2026"
              description="Location-based alarm application with real-time geofencing and notifications."
              active={true}
            />
            <ProjectCard 
              title="QuizCraft" 
              year="2026"
              description="AI-powered study platform that provides customized quizzes and flashcard decks."
              active={true}
            />
            <ProjectCard 
              title="IskoMate" 
              year="2026"
              description="Real-time student engagement detection system using trained AI models."
              active={false}
            />
          </div>
        </section>

        {/* WHAT I DO SECTION (Added max-w-[1200px] and side padding) */}
        <section className="max-w-[1200px] mx-auto py-24 px-8 lg:px-12">
          <div className="flex items-center gap-4 text-gray-500 font-mono text-sm tracking-widest uppercase mb-12">
            <span className="w-12 h-[1px] bg-gray-700"></span>
            What I Do
          </div>

          <div className="flex flex-col">
            <ServiceRow 
              num="01" 
              title="Machine Learning" 
              desc="Training and deploying computer vision models for real-time edge devices." 
            />
            <ServiceRow 
              num="02" 
              title="Systems & Infrastructure" 
              desc="Configuring secure networks, Tailscale tunnels, and Linux server environments." 
            />
            <ServiceRow 
              num="03" 
              title="Application Development" 
              desc="Building cross-platform apps in Flutter with complex, scalable UI components." 
            />
          </div>
        </section>

        {/* FOOTER & CTA */}
        <footer className="max-w-[1200px] mx-auto pt-32 pb-12 px-8 lg:px-12 mt-12">
          
          <div className="flex flex-col items-center justify-center text-center space-y-8 pb-32">
            <h2 className="text-4xl lg:text-6xl font-bold font-sans flex items-center gap-2">
              Have something worth building<span className="text-neon">?</span>
            </h2>
            <p className="text-gray-400 font-mono text-lg">Open to new-grad roles and problems worth the effort.</p>
            <button className="px-8 py-4 border border-gray-600 rounded-lg font-mono text-gray-300 hover:bg-neon hover:text-black hover:border-neon transition-all duration-300">
              Get in touch
            </button>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 font-mono text-sm text-gray-500">
            <div>
              <p className="font-bold text-white mb-2">austria<span className="text-neon">.</span>john</p>
              <p>Software Engineer, Obando, Philippines</p>
              <p className="mt-8">© 2026 John Gwen Isaac</p>
            </div>
            
            <div className="flex gap-12">
              <div className="flex flex-col gap-2">
                <a href="#" className="hover:text-neon transition-colors">Projects</a>
                <a href="#" className="hover:text-neon transition-colors">Work</a>
                <a href="#" className="hover:text-neon transition-colors">About</a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="#" className="hover:text-neon transition-colors">GitHub</a>
                <a href="#" className="hover:text-neon transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-neon transition-colors">Email</a>
              </div>
            </div>

            <div className="md:text-right">
              <p className="mt-8 md:mt-0">Designed and built from scratch.</p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

/* =========================================
   HELPER COMPONENTS
   ========================================= */

function SocialIcon({ href, children }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="p-2.5 rounded-full border-2 border-neon text-neon hover:text-black hover:bg-neon transition-colors duration-150 flex items-center justify-center"
    >
      {children}
    </a>
  );
}

function StatItem({ number, label }) {
  return (
    <div className="flex items-center gap-4 transition-all duration-300 group-hover:blur-sm hover:!blur-none hover:scale-110 cursor-default">
      <span className="text-6xl lg:text-7xl font-bold font-mono">{number}</span>
      <span className="text-sm font-mono text-gray-400 leading-tight">{label}</span>
    </div>
  );
}

function ProjectCard({ title, year, description, active }) {
  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="bg-[#11121a] rounded-xl overflow-hidden border border-gray-800 group-hover:border-neon transition-colors duration-300">
        <div className="flex gap-2 px-4 py-3 bg-[#0d0e15] border-b border-gray-800">
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
        </div>
        <div className="h-48 w-full bg-gradient-to-br from-[#1a1c29] to-[#0d0e15] flex items-center justify-center">
          <span className="text-gray-700 font-mono text-sm opacity-50">Image Preview</span>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <div className="flex justify-between items-center font-sans">
          <h3 className="text-2xl font-bold">{title}</h3>
          <span className="font-mono text-gray-500 text-sm">{year}</span>
        </div>
        <p className="text-gray-400 font-sans text-lg">{description}</p>
        <div className="flex items-center gap-2 font-mono text-sm pt-2">
          <div className={`w-2 h-2 rounded-full ${active ? 'bg-neon' : 'bg-gray-600'}`}></div>
          <span className={active ? 'text-neon' : 'text-gray-500'}>
            {active ? 'Actively maintained' : 'Deployed but not maintained'}
          </span>
        </div>
      </div>
    </div>
  );
}

function ServiceRow({ num, title, desc }) {
  return (
    <div className="border-t border-gray-800 py-10 flex flex-col md:flex-row md:items-center gap-6 hover:bg-[#11121a] transition-colors -mx-4 px-4 rounded-xl cursor-pointer">
      <div className="text-neon font-mono text-sm w-12 pt-1 md:pt-0">{num}</div>
      <h3 className="text-2xl font-bold font-sans w-full md:w-1/3">{title}</h3>
      <p className="text-gray-400 font-sans text-lg w-full md:w-2/3 leading-relaxed">{desc}</p>
    </div>
  );
}

export default App;