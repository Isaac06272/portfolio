import React, { useState, useEffect, useRef } from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUpRight, FiPlay, FiCode } from 'react-icons/fi';

function App() {
  const [showNav, setShowNav] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Projects', 'Certifications', 'About'];

  return (
    <div className="w-full text-white bg-[#0b0c13] min-h-screen flex flex-col relative selection:bg-neon selection:text-black">
      
      {/* GLOBAL GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f30_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f30_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_15%,transparent_85%,black_100%)]"></div>
      </div>

      {/* NAVIGATION BAR (Top) */}
      <nav className="flex justify-between items-center px-8 lg:px-16 py-8 w-full font-mono text-lg z-50 relative">
        <div 
          onClick={() => {
            setActiveTab('Home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-bold tracking-wide flex items-center gap-3 text-2xl font-sans cursor-pointer"
        >
          Austria
          <span className="w-2 h-2 rounded-full bg-neon"></span>
        </div>
        
        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <a 
              key={item}
              onClick={() => {
                setActiveTab(item);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`pb-1 cursor-pointer transition-colors border-b-2 ${
                activeTab === item 
                  ? 'text-neon border-neon' 
                  : 'text-gray-400 hover:text-white border-transparent'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* PAGE ROUTING (Conditional Rendering) */}
      <div className="flex-grow relative z-10">
        {activeTab === 'Home' && <HomeContent setActiveTab={setActiveTab} />}
        {activeTab === 'Projects' && <ProjectsContent />}
        {activeTab === 'Certifications' && <CertificationsContent />}
        {activeTab === 'About' && <AboutContent />}
      </div>

      {/* GLOBAL FOOTER (Simple bar for all pages) */}
      <footer className="w-full max-w-[1700px] mx-auto px-8 lg:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-800 mt-auto relative z-10 bg-[#0b0c13]/80 backdrop-blur-sm">
        <div className="text-xl font-bold font-mono tracking-wider text-gray-400 hover:text-neon transition-colors cursor-default">
          John Gwen Isaac Austria
        </div>
        <div className="flex gap-4">
          <SocialIcon href="mailto:your.email@example.com"><FiMail size={20} /></SocialIcon>
          <SocialIcon href="https://github.com"><FiGithub size={20} /></SocialIcon>
          <SocialIcon href="https://linkedin.com"><FiLinkedin size={20} /></SocialIcon>
          <SocialIcon href="https://instagram.com"><FiInstagram size={20} /></SocialIcon>
        </div>
      </footer>

      {/* FLOATING NAVIGATION (Pop-up on scroll) */}
      <div 
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${showNav ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-[#0b0c13]/70 backdrop-blur-md border border-gray-800 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          {navItems.map((item) => (
            <a 
              key={item}
              onClick={() => {
                setActiveTab(item);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`cursor-pointer px-5 py-2.5 text-sm font-mono transition-all rounded-full border ${
                activeTab === item
                  ? 'text-neon border-neon bg-neon/10'
                  : 'text-gray-400 border-transparent hover:text-neon hover:bg-white/5'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}

/* =========================================
   PAGE COMPONENTS
   ========================================= */

// 1. HOME PAGE
function HomeContent({ setActiveTab }) {
  return (
    <>
      <main className="min-h-[85vh] flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-16 max-w-[1700px] mx-auto w-full py-12 gap-16">
        <div className="flex-1 space-y-8 z-10 lg:pl-20">
          <div className="space-y-4">
            <p className="text-gray-400 text-lg lg:text-xl font-mono tracking-wide">Fullstack Developer</p>
            <h1 className="text-5xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight font-mono flex flex-col">
              <span>Hello I'm</span>
              <span className="group/name relative inline-block overflow-hidden cursor-default px-3 py-1 mt-2 w-fit">
                <span className="relative z-10 transition-colors duration-500 text-neon group-hover/name:text-black block">
                  Austria <br/>John Gwen Isaac
                </span>
                <span className="absolute inset-0 bg-neon -translate-x-[105%] group-hover/name:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
              </span>
            </h1>
          </div>
          <div className="text-gray-400 space-y-2 text-base lg:text-lg font-mono leading-relaxed max-w-2xl">
            <p>ML & AI Engineer | Cloud | Data Engineer</p>
            <p>CpE | Philippines</p>
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-6">
            <button className="group flex items-center gap-3 border-2 border-neon rounded-full px-8 py-3 text-neon hover:bg-neon hover:text-black transition-colors duration-150 font-mono">
              <span className="text-base font-semibold tracking-wider">VIEW CV</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
            <div className="flex gap-4">
              <SocialIcon href="mailto:your.email@example.com"><FiMail size={22} /></SocialIcon>
              <SocialIcon href="https://github.com"><FiGithub size={22} /></SocialIcon>
              <SocialIcon href="https://linkedin.com"><FiLinkedin size={22} /></SocialIcon>
              <SocialIcon href="https://instagram.com"><FiInstagram size={22} /></SocialIcon>
            </div>
          </div>
        </div>

        {/* CURSOR-REACTIVE ANIMATION */}
        <div className="flex-1 flex justify-center items-center w-full">
          <InteractiveMesh />
        </div>
      </main>

      <div className="relative z-20 w-full pb-8">
        <div className="w-full bg-gradient-to-b from-[#0b0c13]/0 via-[#0b0c13] to-[#0b0c13]/0">
          <section className="max-w-[1400px] mx-auto flex flex-col justify-center px-8 lg:px-12 py-16">
            <div className="group flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8 w-full">
              <StatItem number="22" label="Age" />
              <StatItem number="2" label={<span>Years of<br/>experience</span>} />
              <StatItem number="9" label={<span>Personal<br/>projects</span>} />
              <StatItem number="2" label={<span>Companies<br/>interned</span>} />
            </div>
          </section>
        </div>

        <div className="w-full bg-transparent">
          <section className="max-w-[1200px] mx-auto py-16 px-8 lg:px-12">
            <div className="flex items-center gap-4 text-gray-500 font-mono text-sm tracking-widest uppercase mb-6">
              <span className="w-12 h-[1px] bg-gray-700"></span>
              Selected Work
            </div>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <h2 className="text-4xl lg:text-5xl font-bold font-sans">
                Some of my <span className="text-neon">personal projects</span>
              </h2>
              <a 
                onClick={() => {
                  setActiveTab('Projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 text-gray-400 hover:text-neon transition-colors font-mono pb-1 cursor-pointer"
              >
                All projects <FiArrowUpRight />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProjectCard 
                title="Nappr" 
                year="2026"
                description="Location-based alarm application with real-time geofencing and notifications."
                active={true}
                imgSrc="nappr.jpg"
              />
              <ProjectCard 
                title="QuizCraft" 
                year="2026"
                description="AI-powered study platform that provides customized quizzes and flashcard decks."
                active={true}
                imgSrc="quizcraft.jpg"
              />
              <ProjectCard 
                title="IskoMate" 
                year="2026"
                description="Real-time student engagement detection system using trained AI models."
                active={true}
                imgSrc="iskomate.jpg" 
              />
            </div>
          </section>
        </div>

        {/* WHAT I DO SECTION */}
        <div className="w-full bg-transparent">
          <section className="max-w-[1200px] mx-auto py-16 px-8 lg:px-12">
            <div className="flex items-center gap-4 text-gray-500 font-mono text-sm tracking-widest uppercase mb-12">
              <span className="w-12 h-[1px] bg-gray-700"></span>
              What I Do
            </div>
            <div className="flex flex-col">
              <ServiceRow 
                num="01" 
                title="AI Engineering & Deployment" 
                desc="Training custom ML models, managing the end-to-end deployment lifecycle, and integrating scalable APIs for personal works." 
              />
              <ServiceRow 
                num="02" 
                title="ML Infrastructure" 
                desc="Building the server environments, edge networks, and data pipelines required to keep AI running reliably." 
              />
              <ServiceRow 
                num="03" 
                title="Software Development" 
                desc="Developing modern, cross-platform web and mobile applications with highly interactive user interfaces." 
              />
            </div>
          </section>
        </div>
        
        {/* CONTACT SECTION ON HOME PAGE */}
        <div className="w-full bg-transparent pt-16">
          <ContactSection />
        </div>
      </div>
    </>
  );
}

// 2. PROJECTS PAGE
function ProjectsContent() {
  return (
    <div className="w-full bg-transparent min-h-screen pb-16">
      
      <section className="max-w-[1200px] mx-auto pt-24 pb-16 px-8 lg:px-12">
        <div className="flex items-center gap-4 text-gray-500 font-mono text-sm tracking-widest uppercase mb-8">
          <span className="w-12 h-[1px] bg-gray-700"></span>
          Projects
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold font-sans mb-8">
          Things I've built, <br className="hidden md:block"/> end to end.
        </h1>
        <p className="text-gray-400 text-lg lg:text-xl max-w-2xl leading-relaxed">
          Apps real people use, machine learning systems, data infrastructure, and independent academic research. Open any project for the full story.
        </p>
      </section>

      <section className="max-w-[1200px] mx-auto px-8 lg:px-12 py-12 flex flex-col gap-32">
        
        <FeaturedProject 
          num="01"
          year="2026"
          title="Nappr"
          active={true}
          reverse={false}
          desc="A precision location-based alarm application built for mobile platforms. Nappr utilizes real-time background geofencing to wake users up exactly when they arrive at their destination via public transit, leveraging low-power location APIs and local push notifications."
          tags={['Flutter', 'Dart', 'Geofencing APIs', 'Local Push']}
          imgSrc="nappr.jpg" 
        />

        <FeaturedProject 
          num="02"
          year="2026"
          title="QuizCraft Platform"
          active={true}
          reverse={true}
          desc="An AI-powered educational platform that automatically generates customized quizzes and flashcard decks from user-provided notes. Features dynamic difficulty scaling and progress tracking. Engineered the entire backend pipeline and built a scalable cross-platform UI for seamless student use."
          tags={['React', 'Node.js', 'LLM APIs', 'MongoDB', 'TailwindCSS']}
          imgSrc="quizcraft.jpg" 
        />

        <FeaturedProject 
          num="03"
          year="2026"
          title="IskoMate System"
          active={true}
          reverse={false} 
          desc="An advanced computer vision system designed to detect and monitor student engagement levels in real-time. It streams webcam data from edge devices (Raspberry Pi) securely via Tailscale to a central laptop server running classification models. The system logs attention metrics directly to a customized database."
          tags={['Python', 'Computer Vision', 'Raspberry Pi', 'Tailscale', 'Flutter']}
          imgSrc="iskomate.jpg" 
        />

      </section>

      {/* More Work Grid */}
      <section className="max-w-[1200px] mx-auto pt-32 pb-16 px-8 lg:px-12 border-t border-gray-800/50 mt-16">
        <div className="flex items-center gap-4 text-gray-500 font-mono text-sm tracking-widest uppercase mb-16">
          <span className="w-12 h-[1px] bg-gray-700"></span>
          More Work
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard 
            title="Timeline UI" 
            year="2026"
            description="Interactive Flutter data visualization components. Features dynamic zoom-in and zoom-out for timeline graphs."
            active={true}
            imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
          />
          <ProjectCard 
            title="Hardware Toolkit" 
            year="2025"
            description="Arduino and microcontroller interface frameworks for rapid prototyping of sensor-based IoT systems."
            active={false}
            imgSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
          />
          <ProjectCard 
            title="SecureBank" 
            year="2025"
            description="A containerized Next.js banking environment intentionally built with vulnerabilities to test security penetration tools."
            active={false}
            imgSrc="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"
          />
        </div>
      </section>
    </div>
  );
}

// 3. CERTIFICATIONS PAGE
function CertificationsContent() {
  return (
    <div className="w-full bg-transparent min-h-[70vh] pb-16">
      <section className="max-w-[1200px] mx-auto pt-24 px-8 lg:px-12">
        <div className="flex items-center gap-4 text-gray-500 font-mono text-sm tracking-widest uppercase mb-8">
          <span className="w-12 h-[1px] bg-gray-700"></span>
          Certifications
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold font-sans mb-8">
          Verified <br className="hidden md:block"/> Expertise.
        </h1>
        <p className="text-gray-400 text-lg lg:text-xl max-w-2xl leading-relaxed mb-16">
          A collection of my technical certifications, industry credentials, and continuous learning achievements in AI, Cloud, and Software Engineering.
        </p>
        
        <div className="flex flex-col border-t border-gray-800/50">
          <CertificationRow 
            year="2026" 
            title="AWS Certified Machine Learning – Specialty" 
            issuer="Amazon Web Services (AWS)"
            desc="Validated expertise in building, training, tuning, and deploying machine learning models seamlessly on the AWS Cloud architecture." 
          />
          <CertificationRow 
            year="2025" 
            title="TensorFlow Developer Certificate" 
            issuer="Google"
            desc="Demonstrated foundational knowledge of integrating machine learning into tools and applications using TensorFlow, covering computer vision and NLP." 
          />
          <CertificationRow 
            year="2025" 
            title="Google Cloud Professional Data Engineer" 
            issuer="Google Cloud"
            desc="Certified ability to design, build, operationalize, secure, and monitor data processing systems with an emphasis on security and compliance." 
          />
          <CertificationRow 
            year="2024" 
            title="Flutter Certified Application Developer" 
            issuer="Google Developers"
            desc="Recognized proficiency in building highly interactive, cross-platform mobile applications using the Flutter framework and Dart." 
          />
        </div>
      </section>
    </div>
  );
}

// 4. ABOUT PAGE
function AboutContent() {
  return (
    <div className="w-full min-h-screen pb-16 relative z-10">
      <section className="max-w-[1200px] mx-auto pt-24 px-8 lg:px-12">
        <div className="flex items-center gap-4 text-gray-500 font-mono text-sm tracking-widest uppercase mb-16">
          <span className="w-12 h-[1px] bg-gray-700"></span>
          About Me
        </div>
        
        {/* TOP ROW: Bio + Profile Ring */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 mb-24">
          
          {/* Bio Text (Left) */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-5xl lg:text-7xl font-bold font-sans mb-8 leading-tight">
              Engineering <br /> <span className="text-neon">at the edge.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm an academic student in Computer Engineering with a strong focus on hands-on software development, network protocols, and hardware experimentation.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Whether I'm developing real-time computer vision models for edge devices like the Raspberry Pi, routing protocols over Tailscale, or building scalable cross-platform applications in Flutter, I love bridging the gap between physical hardware and intuitive software.
            </p>
            <div className="pt-4">
              <button className="flex items-center gap-3 border-2 border-neon rounded-full px-8 py-3 text-neon hover:bg-neon hover:text-black transition-colors duration-150 font-mono w-fit">
                <span className="text-sm font-semibold tracking-wider uppercase">Download CV</span>
              </button>
            </div>
          </div>
          
          {/* PROFILE RING (Right) */}
          <div className="flex-1 flex justify-center items-center w-full">
            <div className="relative group w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] flex justify-center items-center cursor-pointer">
              <svg className="absolute inset-0 w-full h-full animate-[spin_25s_linear_infinite] transition-all duration-500 group-hover:scale-[1.15] group-hover:drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48.5" fill="none" stroke="var(--color-neon)" strokeWidth="0.8" strokeDasharray="30 4 5 4 15 10 40 8 12 5" />
                <circle cx="50" cy="50" r="46" fill="none" stroke="var(--color-neon)" strokeWidth="0.3" strokeDasharray="2 15" className="opacity-40" />
              </svg>
              <div className="w-[87%] h-[87%] rounded-full overflow-hidden bg-[#9785c4] flex items-center justify-center p-2 relative z-10 transition-transform duration-500 group-hover:scale-105">
                <img src="https://via.placeholder.com/800x800" alt="Profile" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>

        </div>
        
        {/* BOTTOM ROW: Skills Grid (3 Columns) */}
        <div className="mb-24">
          <div className="flex items-center gap-4 text-gray-500 font-mono text-sm tracking-widest uppercase mb-12 justify-center">
            <span className="w-12 h-[1px] bg-gray-700"></span>
            Tech Stack
            <span className="w-12 h-[1px] bg-gray-700"></span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCategory 
              title="Languages" 
              skills={['Python', 'Dart', 'JavaScript', 'TypeScript', 'C++']} 
            />
            <SkillCategory 
              title="Frameworks & Libraries" 
              skills={['Flutter', 'React', 'Node.js', 'TensorFlow', 'OpenCV']} 
            />
            <SkillCategory 
              title="Tools & Hardware" 
              skills={['Raspberry Pi', 'Arduino', 'Tailscale', 'AWS Cloud', 'MongoDB']} 
            />
          </div>
        </div>
      </section>

      {/* Styled Form for the About page */}
      <AboutContactForm />
    </div>
  );
}

/* =========================================
   HELPER COMPONENTS
   ========================================= */

// NEW INTERACTIVE MESH COMPONENT (Replaces the spinning ring on Home)
function InteractiveMesh() {
  const canvasRef = useRef(null);
  
  // Radius reduced to 60 as discussed for a tighter hover effect
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 60 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const setSize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = 180;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < numParticles; i++) {
        // Generate an organic, messy cluster (not a perfect circle)
        const angle = Math.random() * Math.PI * 2;
        // Distortion makes it look like an abstract 3D blob
        const distortion = Math.sin(angle * 4) * 40 + Math.cos(angle * 3) * 30;
        const radius = (Math.random() * 120) + distortion;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        particles.push({
          x: x,
          y: y,
          baseX: x,
          baseY: y,
          size: Math.random() * 3 + 1, // Varying sizes for depth
          driftAngle: Math.random() * Math.PI * 2,
          driftSpeed: Math.random() * 0.02
        });
      }
    };

    setSize();
    window.addEventListener('resize', setSize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      // Update and Draw particles
      particles.forEach(p => {
        // Subtle idle drifting
        p.driftAngle += p.driftSpeed;
        const idleX = p.baseX + Math.cos(p.driftAngle) * 5;
        const idleY = p.baseY + Math.sin(p.driftAngle) * 5;

        // Interaction physics
        let dx = mouse.x - p.x;
        let dy = mouse.y - p.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * 15;
        let directionY = forceDirectionY * force * 15;

        if (distance < mouse.radius) {
          p.x -= directionX;
          p.y -= directionY;
        } else {
          // Spring back to idle position
          p.x -= (p.x - idleX) * 0.08;
          p.y -= (p.y - idleY) * 0.08;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#00e5ff'; // Neon cyan color
        ctx.fill();
      });

      // Draw connecting mesh lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 35) { // Connection threshold
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 229, 255, ${1 - distance/35})`; // Fades out over distance
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', setSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] lg:h-[500px] flex justify-center items-center group cursor-crosshair">
      {/* Subtle backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon/10 blur-[100px] rounded-full pointer-events-none transition-all duration-1000 group-hover:bg-neon/30"></div>
      <canvas ref={canvasRef} className="w-full h-full relative z-10" />
    </div>
  );
}

function AboutContactForm() {
  return (
    <div className="max-w-[800px] mx-auto w-full px-8 pb-32 pt-16">
      
      <div className="flex items-center gap-4 text-gray-500 font-mono text-sm tracking-widest uppercase mb-12 justify-center">
        <span className="w-12 h-[1px] bg-gray-700"></span>
        Get in Touch
        <span className="w-12 h-[1px] bg-gray-700"></span>
      </div>
      
      <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-3 flex-1 group">
            <label className="text-gray-400 font-mono text-sm uppercase tracking-wider group-focus-within:text-neon transition-colors">Name</label>
            <input 
              type="text" 
              placeholder="Your secret identity"
              className="bg-[#11121a]/80 backdrop-blur-sm border border-gray-800/80 rounded-xl px-5 py-4 text-base text-white focus:outline-none focus:border-neon transition-colors placeholder-gray-600 w-full font-sans"
            />
          </div>
          <div className="flex flex-col gap-3 flex-1 group">
            <label className="text-gray-400 font-mono text-sm uppercase tracking-wider group-focus-within:text-neon transition-colors">Email Address</label>
            <input 
              type="email" 
              placeholder="I won't spam you, I promise"
              className="bg-[#11121a]/80 backdrop-blur-sm border border-gray-800/80 rounded-xl px-5 py-4 text-base text-white focus:outline-none focus:border-neon transition-colors placeholder-gray-600 w-full font-sans"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 group">
          <label className="text-gray-400 font-mono text-sm uppercase tracking-wider group-focus-within:text-neon transition-colors">Content</label>
          <textarea 
            placeholder="Your message goes here"
            rows="6"
            className="bg-[#11121a]/80 backdrop-blur-sm border border-gray-800/80 rounded-xl px-5 py-4 text-base text-white focus:outline-none focus:border-neon transition-colors placeholder-gray-600 w-full resize-y font-sans"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="mt-4 w-full px-10 py-5 border-2 border-neon rounded-xl font-mono text-neon hover:bg-neon hover:text-black transition-all duration-300 text-lg font-bold tracking-wide flex justify-center items-center gap-3 group"
        >
          Send Email <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
        </button>

      </form>
    </div>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="bg-[#11121a]/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800/80 hover:border-neon transition-colors duration-300">
      <h3 className="text-xl font-bold font-sans mb-4 text-white flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-neon"></span> {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-1.5 bg-[#0b0c13] border border-gray-700/80 rounded-full text-sm font-mono text-gray-300 hover:text-neon hover:border-neon transition-all cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center text-center space-y-8 px-8 pb-12 pt-16">
      <h2 className="text-5xl lg:text-7xl font-bold font-sans flex items-center gap-3">
        Let's <span className="text-neon">Connect!</span>
      </h2>
      <p className="text-gray-400 font-mono text-lg max-w-2xl leading-relaxed">
        I'm always open to discussing new grad opportunities, exciting projects, or partnership requests. Drop a message and let's build something great together!
      </p>
      <button className="px-10 py-4 border-2 border-neon rounded-full font-mono text-neon hover:bg-neon hover:text-black transition-all duration-300 mt-8 text-lg font-bold tracking-wide">
        Send an email
      </button>
    </div>
  );
}

function FeaturedProject({ num, year, title, desc, active, tags, imgSrc, reverse }) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
      <div className="w-full lg:w-3/5 group cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(0,229,255,0.3)] rounded-xl relative z-10">
        <div className="bg-[#11121a] rounded-xl overflow-hidden border border-gray-800 group-hover:border-neon transition-colors duration-300">
          <div className="flex gap-2 px-4 py-3 bg-[#0d0e15] border-b border-gray-800 z-10 relative">
            <div className="w-3 h-3 rounded-full bg-gray-600"></div>
            <div className="w-3 h-3 rounded-full bg-gray-600"></div>
            <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          </div>
          <div className="h-[300px] lg:h-[400px] w-full bg-gradient-to-br from-[#1a1c29] to-[#0d0e15] flex items-center justify-center overflow-hidden relative">
            {imgSrc ? (
              <img src={imgSrc} alt={`${title} preview`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            ) : (
              <span className="text-gray-700 font-mono text-sm opacity-50">Image Preview</span>
            )}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <div className="flex items-center gap-4 font-mono text-sm mb-6">
          <span className="text-neon">{num}</span>
          <span className="text-gray-500">{year}</span>
          <span className="w-8 h-[1px] bg-gray-700"></span>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${active ? 'bg-neon' : 'bg-gray-600'}`}></div>
            <span className={active ? 'text-neon' : 'text-gray-500'}>
              {active ? 'Actively maintained' : 'Archived'}
            </span>
          </div>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold font-sans mb-6">{title}</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">{desc}</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {tags.map((tag) => (
            <span key={tag} className="px-4 py-1.5 border border-gray-700 rounded-full text-sm font-mono text-gray-400 hover:text-neon hover:border-neon transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-8 font-mono text-sm">
          <a className="flex items-center gap-2 text-neon hover:underline cursor-pointer group">
            Case study <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
            <FiPlay /> Live
          </a>
          <a className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
            <FiCode /> Source
          </a>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ href, children }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="p-2.5 rounded-full border-2 border-neon text-neon hover:text-black hover:bg-neon transition-colors duration-150 flex items-center justify-center bg-[#0b0c13]"
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

function ProjectCard({ title, year, description, active, imgSrc }) {
  return (
    <div className="flex flex-col h-full group cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(0,229,255,0.3)] rounded-xl">
      <div className="bg-[#11121a]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/80 group-hover:border-neon transition-colors duration-300">
        <div className="flex gap-2 px-4 py-3 bg-[#0d0e15] border-b border-gray-800 z-10 relative">
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
        </div>
        <div className="h-64 w-full bg-gradient-to-br from-[#1a1c29] to-[#0d0e15] flex items-center justify-center overflow-hidden relative">
          {imgSrc ? (
            <img src={imgSrc} alt={`${title} preview`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
          ) : (
            <span className="text-gray-700 font-mono text-sm opacity-50">Image Preview</span>
          )}
        </div>
      </div>
      
      <div className="mt-8 space-y-3 px-4 pb-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center font-sans">
          <h3 className="text-xl font-bold group-hover:text-neon transition-colors">{title}</h3>
          <span className="font-mono text-gray-500 text-sm">{year}</span>
        </div>
        <p className="text-gray-400 font-sans text-base leading-relaxed flex-grow">{description}</p>
        <div className="pt-4 mt-auto">
           <a className="flex w-fit items-center gap-2 text-neon text-sm font-mono hover:underline group-hover:translate-x-2 transition-transform cursor-pointer">
            Case study <FiArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
}

function ServiceRow({ num, title, desc }) {
  return (
    <div className="py-12 flex flex-col md:flex-row md:items-start gap-4 hover:bg-[#11121a]/50 transition-colors border-b border-gray-800/50 -mx-4 px-4 cursor-default rounded-xl">
      <div className="text-neon font-mono text-sm w-12 pt-1">{num}</div>
      <h3 className="text-xl lg:text-2xl font-bold font-sans w-full md:w-1/3 pt-0.5">{title}</h3>
      <p className="text-gray-400 font-sans text-base lg:text-lg w-full md:w-2/3 leading-relaxed">{desc}</p>
    </div>
  );
}

function CertificationRow({ year, title, issuer, desc }) {
  return (
    <div className="py-12 flex flex-col md:flex-row md:items-start gap-6 hover:bg-[#11121a]/50 transition-colors border-b border-gray-800/50 -mx-4 px-4 cursor-default group rounded-xl">
      <div className="text-neon font-mono text-sm w-20 pt-1">{year}</div>
      <div className="w-full md:w-1/3 flex flex-col">
        <h3 className="text-xl lg:text-2xl font-bold font-sans group-hover:text-neon transition-colors">{title}</h3>
        <span className="text-gray-500 font-mono text-sm mt-2">{issuer}</span>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <p className="text-gray-400 font-sans text-base lg:text-lg leading-relaxed">{desc}</p>
        <a className="flex w-fit items-center gap-2 text-neon text-sm font-mono hover:underline group-hover:translate-x-2 transition-transform cursor-pointer">
          View Credential <FiArrowUpRight />
        </a>
      </div>
    </div>
  );
}

export default App;