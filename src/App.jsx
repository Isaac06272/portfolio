import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUpRight } from 'react-icons/fi';

function App() {
  // State to track if we should show the floating nav
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling down 300px
      if (window.scrollY > 300) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full text-white bg-transparent">
      
      {/* NAVIGATION BAR (Top) */}
      <nav className="flex justify-between items-center px-8 lg:px-16 py-8 w-full font-mono text-lg">
        <div className="font-bold tracking-wide flex items-center gap-3 text-2xl font-sans">
          Austria
          <span className="w-2 h-2 rounded-full bg-neon"></span>
        </div>
        
        <div className="hidden md:flex gap-10">
          <a href="#home" className="text-neon border-b-2 border-neon pb-1 cursor-pointer">Home</a>
          <a href="#projects" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Projects</a>
          <a href="#services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Services</a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main id="home" className="min-h-[85vh] flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-16 max-w-[1700px] mx-auto w-full py-12 gap-16">
        
        {/* Left Column: Text & Info */}
        <div className="flex-1 space-y-8 z-10 lg:pl-20">
          <div className="space-y-4">
            <p className="text-gray-400 text-lg lg:text-xl font-mono tracking-wide">Fullstack Developer</p>
            <h1 className="text-5xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight font-mono flex flex-col">
              <span>Hello I'm</span>
              <span className="group/name relative inline-block overflow-hidden cursor-default px-3 py-1 mt-2 w-fit">
                <span className="relative z-10 transition-colors duration-500 text-neon group-hover/name:text-black block">
                  AUSTRIA JOHN <br/> GWEN ISAAC
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
      <div className="relative z-20 w-full pb-8">
        
        {/* STATS SECTION */}
        <section className="max-w-[1400px] mx-auto flex flex-col justify-center px-8 lg:px-12 py-16 bg-transparent">
          <div className="group flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8 w-full">
            <StatItem number="22" label="Age" />
            <StatItem number="2" label={<span>Years of<br/>experience</span>} />
            <StatItem number="9" label={<span>Personal<br/>projects</span>} />
            <StatItem number="2" label={<span>Companies<br/>interned</span>} />
          </div>
        </section>

        {/* SELECTED WORK SECTION */}
        <section id="projects" className="max-w-[1200px] mx-auto py-16 px-8 lg:px-12 bg-transparent scroll-mt-24">
          <div className="flex items-center gap-4 text-gray-500 font-mono text-sm tracking-widest uppercase mb-6">
            <span className="w-12 h-[1px] bg-gray-700"></span>
            Selected Work
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-4xl lg:text-5xl font-bold font-sans">
              Some of my <span className="text-neon">personal projects</span>
            </h2>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-neon transition-colors font-mono pb-1">
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

        {/* WHAT I DO SECTION */}
        <section id="services" className="max-w-[1200px] mx-auto py-16 px-8 lg:px-12 bg-transparent scroll-mt-24">
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
        <footer id="contact" className="w-full pt-16 pb-8 bg-transparent scroll-mt-24">
          
          <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center text-center space-y-8 pb-20 px-8">
            <h2 className="text-5xl lg:text-7xl font-bold font-sans flex items-center gap-3">
              Let's <span className="text-neon">Connect</span>
            </h2>
            <p className="text-gray-400 font-mono text-lg max-w-2xl leading-relaxed">
              I'm always open to discussing new grad opportunities, exciting projects, or partnership requests. Drop a message and let's build something great together!
            </p>
            <button className="px-10 py-4 border-2 border-neon rounded-full font-mono text-neon hover:bg-neon hover:text-black transition-all duration-300 mt-4 text-lg font-bold tracking-wide">
              Send an email
            </button>
          </div>

          <div className="w-full max-w-[1700px] mx-auto px-8 lg:px-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-xl font-bold font-mono tracking-wider text-gray-400 hover:text-neon transition-colors cursor-default">
              John Gwen Isaac Austria
            </div>
            
            <div className="flex gap-4">
              <SocialIcon href="mailto:your.email@example.com"><FiMail size={20} /></SocialIcon>
              <SocialIcon href="https://github.com"><FiGithub size={20} /></SocialIcon>
              <SocialIcon href="https://linkedin.com"><FiLinkedin size={20} /></SocialIcon>
              <SocialIcon href="https://instagram.com"><FiInstagram size={20} /></SocialIcon>
            </div>
          </div>
        </footer>

      </div>

      {/* FLOATING NAVIGATION (Pop-up on scroll) */}
      <div 
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${showNav ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-[#0b0c13]/70 backdrop-blur-md border border-gray-800 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <a href="#home" className="px-5 py-2.5 text-sm font-mono text-gray-400 hover:text-neon transition-all rounded-full hover:bg-white/5">Home</a>
          <a href="#projects" className="px-5 py-2.5 text-sm font-mono text-gray-400 hover:text-neon transition-all rounded-full hover:bg-white/5">Work</a>
          <a href="#services" className="px-5 py-2.5 text-sm font-mono text-gray-400 hover:text-neon transition-all rounded-full hover:bg-white/5">Services</a>
          <a href="#contact" className="px-5 py-2.5 text-sm font-mono text-neon transition-all rounded-full border border-neon bg-neon/10">Contact</a>
        </div>
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
    <div className="flex items-center gap-4 transition-all duration-500 group-hover:blur-md hover:!blur-none hover:scale-[1.4] relative z-10 hover:z-20 cursor-default px-4">
      <span className="text-8xl lg:text-[10rem] font-bold font-mono tracking-tighter text-white drop-shadow-lg">{number}</span>
      <span className="text-lg lg:text-xl font-mono text-gray-400 leading-snug">{label}</span>
    </div>
  );
}

function ProjectCard({ title, year, description, active }) {
  return (
    <div className="flex flex-col group cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:rotate-1 hover:shadow-[0_15px_40px_-15px_rgba(0,229,255,0.2)] rounded-xl">
      <div className="bg-[#11121a] rounded-xl overflow-hidden border border-gray-800 group-hover:border-neon transition-colors duration-300">
        <div className="flex gap-2 px-4 py-3 bg-[#0d0e15] border-b border-gray-800">
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
        </div>
        <div className="h-56 w-full bg-gradient-to-br from-[#1a1c29] to-[#0d0e15] flex items-center justify-center">
          <span className="text-gray-700 font-mono text-sm opacity-50">Image Preview</span>
        </div>
      </div>
      <div className="mt-6 space-y-2 px-2">
        <div className="flex justify-between items-center font-sans">
          <h3 className="text-2xl font-bold group-hover:text-neon transition-colors">{title}</h3>
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
    <div className="py-8 flex flex-col md:flex-row md:items-start gap-4 hover:bg-[#11121a] transition-colors -mx-4 px-4 rounded-xl cursor-pointer">
      <div className="text-neon font-mono text-sm w-12 pt-1">{num}</div>
      <h3 className="text-xl lg:text-2xl font-bold font-sans w-full md:w-1/3 pt-0.5">{title}</h3>
      <p className="text-gray-400 font-sans text-base lg:text-lg w-full md:w-2/3 leading-relaxed">{desc}</p>
    </div>
  );
}

export default App;