import React from 'react';

function App() {
  return (
    <div className="w-full">
      
      {/* NAVIGATION BAR */}
      <nav className="flex justify-between items-center px-8 lg:px-16 py-8 w-full font-mono text-lg">
        <div className="font-bold tracking-wide flex items-baseline gap-1 text-2xl font-sans">
          AUSTRIA
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
                
                {/* The Text: changes from neon to black */}
                <span className="relative z-10 transition-colors duration-500 text-neon group-hover/name:text-black">
                  AUSTRIA JOHN GWEN ISAAC
                </span>
                
                {/* The Sliding Background: hidden to the left, slides in on hover */}
                <span className="absolute inset-0 bg-neon -translate-x-[105%] group-hover/name:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
                
              </span>
            </h1>
          </div>

          <div className="text-gray-400 space-y-2 text-base lg:text-lg font-mono leading-relaxed max-w-2xl">
            <p>ML & AI Engineer |  Cloud | Data Engineer</p>
            <p>CpE |  Philippines</p>
          </div>

          {/* Action Buttons & Socials */}
          <div className="flex flex-wrap items-center gap-6 pt-6">
            
            {/* VIEW CV BUTTON: Now uses border-neon and text-neon by default */}
            <button className="group flex items-center gap-3 border-2 border-neon rounded-full px-8 py-3 text-neon hover:bg-neon hover:text-black transition-colors duration-150 font-mono">
              <span className="text-base font-semibold tracking-wider">VIEW CV</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              
              {/* Mail Icon */}
              <SocialIcon href="mailto:your.email@example.com">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </SocialIcon>

              {/* GitHub Icon */}
              <SocialIcon href="https://github.com">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </SocialIcon>

              {/* LinkedIn Icon */}
              <SocialIcon href="https://linkedin.com">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </SocialIcon>

              {/* Instagram Icon */}
              <SocialIcon href="https://instagram.com">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </SocialIcon>

            </div>
          </div>
        </div>

        {/* Right Column: Profile Picture with Rotating Ring */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative group w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] flex justify-center items-center cursor-pointer">
            
            <svg 
              className="absolute inset-0 w-full h-full animate-[spin_25s_linear_infinite] transition-all duration-500 group-hover:scale-[1.15] group-hover:drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]" 
              viewBox="0 0 100 100"
            >
              <circle 
                cx="50" cy="50" r="48.5" 
                fill="none" 
                stroke="var(--color-neon)" 
                strokeWidth="0.8" 
                strokeDasharray="30 4 5 4 15 10 40 8 12 5" 
              />
              <circle 
                cx="50" cy="50" r="46" 
                fill="none" 
                stroke="var(--color-neon)" 
                strokeWidth="0.3" 
                strokeDasharray="2 15" 
                className="opacity-40"
              />
            </svg>

            {/* Inner Profile Image Container */}
            <div className="w-[87%] h-[87%] rounded-full overflow-hidden bg-[#9785c4] flex items-center justify-center p-2 relative z-10 transition-transform duration-500 group-hover:scale-105">
              <img 
                src="https://via.placeholder.com/800x800" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

      </main>

      {/* LOWER SCROLLABLE SECTIONS */}
      <section className="min-h-screen bg-[#0b0c13] flex items-center justify-center">
        <h2 className="text-4xl font-mono text-gray-500">Projects Section</h2>
      </section>
      
      <section className="min-h-screen bg-[#0b0c13] flex items-center justify-center">
        <h2 className="text-4xl font-mono text-gray-500">Certifications Section</h2>
      </section>
      
      <section className="min-h-screen bg-[#0b0c13] flex items-center justify-center">
        <h2 className="text-4xl font-mono text-gray-500">About Section</h2>
      </section>
      
      <section className="min-h-screen bg-[#0b0c13] flex items-center justify-center">
        <h2 className="text-4xl font-mono text-gray-500">Skills Section</h2>
      </section>

    </div>
  );
}

// Helper component: Updated outer border to border-neon!
function SocialIcon({ href, children }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="p-2.5 rounded-full border-2 border-neon text-neon hover:text-black hover:bg-neon transition-colors duration-150 flex items-center justify-center"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </a>
  );
}

export default App;