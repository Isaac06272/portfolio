import React, { useState, useEffect, useRef } from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUpRight, FiPlay, FiCode } from 'react-icons/fi';

function App() {
  const [showNav, setShowNav] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [showCopyToast, setShowCopyToast] = useState(false);

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

  const navItems = ['Home', 'Projects', 'Skills', 'About'];
  // const navItems = ['Home', 'Projects', 'Certifications', 'About']; // Certifications commented out - will re-add later

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('johngwenisaacaustria@gmail.com');
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 2000);
  };

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
        {activeTab === 'Home' && <HomeContent setActiveTab={setActiveTab} handleCopyEmail={handleCopyEmail} />}
        {activeTab === 'Projects' && <ProjectsContent />}
        {activeTab === 'Skills' && <SkillsContent />}
        {/* {activeTab === 'Certifications' && <CertificationsContent />} */}
        {activeTab === 'About' && <AboutContent handleCopyEmail={handleCopyEmail} />}
      </div>

      {/* TOAST NOTIFICATION */}
      {showCopyToast && <CopyToast />}

      {/* GLOBAL FOOTER (Simple bar for all pages) */}
      <footer className="w-full max-w-[1700px] mx-auto px-8 lg:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-800 mt-auto relative z-10 bg-[#0b0c13]/80 backdrop-blur-sm">
        <div className="text-xl font-bold font-mono tracking-wider text-gray-400 hover:text-neon transition-colors cursor-default">
          John Gwen Isaac Austria
        </div>
        <div className="flex gap-4">
          <SocialIcon onClick={handleCopyEmail}><FiMail size={20} /></SocialIcon>
          <SocialIcon href="https://github.com/Isaac06272"><FiGithub size={20} /></SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/johngwenisaacaustria/"><FiLinkedin size={20} /></SocialIcon>
          <SocialIcon href="https://www.instagram.com/_jmbzc"><FiInstagram size={20} /></SocialIcon>
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
function HomeContent({ setActiveTab, handleCopyEmail }) {
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
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 border-2 border-neon rounded-full px-8 py-3 text-neon hover:bg-neon hover:text-black transition-colors duration-150 font-mono cursor-pointer"
            >
              <span className="text-base font-semibold tracking-wider">VIEW CV</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
            <div className="flex gap-4">
              <SocialIcon onClick={handleCopyEmail}><FiMail size={22} /></SocialIcon>
              <SocialIcon href="https://github.com/Isaac06272"><FiGithub size={22} /></SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/johngwenisaacaustria/"><FiLinkedin size={22} /></SocialIcon>
              <SocialIcon href="https://www.instagram.com/_jmbzc"><FiInstagram size={22} /></SocialIcon>
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
              <StatItem number="6" label={<span>Personal<br/>projects</span>} />
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
                imgSrc="nappr.png"
                projectLink="https://github.com/Isaac06272/nappr"
                showCaseStudy={true}
                onCaseStudyClick={() => {
                  setActiveTab('Projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
              <ProjectCard 
                title="QuizCraft" 
                year="2026"
                description="AI-powered study platform that provides customized quizzes and flashcard decks."
                active={true}
                imgSrc="quizcraft.png"
                projectLink="https://quizcraft-one.vercel.app/"
                showCaseStudy={true}
                onCaseStudyClick={() => {
                  setActiveTab('Projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
              <ProjectCard 
                title="IskoMate" 
                year="2026"
                description="Real-time student engagement detection system using trained AI models."
                active={false}
                imgSrc="iskomate.png"
                projectLink="https://iskomate-website.vercel.app/"
                showCaseStudy={true}
                onCaseStudyClick={() => {
                  setActiveTab('Projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
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
        
        {/* CONTACT FORM SECTION ON HOME PAGE */}
        <div className="w-full bg-transparent pt-16">
          <AboutContactForm />
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
          title="LaTech"
          active={true}
          reverse={false}
          desc="A personal intelligence dashboard that delivers a hand-curated, AI-generated weekly digest of the most important developments in artificial intelligence and trending open-source repositories. Fully automated via Make automation that feed a Supabase backend."
          tags={['Next.js 14', 'TypeScript', 'Supabase', 'Make.com', 'TailwindCSS']}
          imgSrc="latech.png"
          projectLink="https://latech-three.vercel.app/"
          sourceLink="https://github.com/Isaac06272/latech"
        />

        <FeaturedProject
          num="02"
          year="2026"
          title="Nappr"
          active={true}
          reverse={true}
          desc="A precision location-based alarm application built for mobile platforms. Nappr utilizes real-time background geofencing to wake users up exactly when they arrive at their destination via public transit, leveraging low-power location APIs and local push notifications."
          tags={['Flutter', 'Dart', 'Geofencing APIs', 'Local Push']}
          imgSrc="nappr.png"
          projectLink="https://github.com/Isaac06272/nappr"
          sourceLink="https://github.com/Isaac06272/nappr"
        />

        <FeaturedProject
          num="03"
          year="2026"
          title="QuizCraft"
          active={true}
          reverse={false}
          desc="An AI-powered educational platform that automatically generates customized quizzes and flashcard decks from user-provided notes. Features dynamic difficulty scaling and progress tracking. Engineered the entire backend pipeline and built a scalable cross-platform UI for seamless student use."
          tags={['React', 'Node.js', 'LLM APIs', 'MongoDB', 'TailwindCSS']}
          imgSrc="quizcraft.png"
          projectLink="https://quizcraft-one.vercel.app/"
          sourceLink="https://github.com/Isaac06272/quizcraft"
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
            title="IskoMate"
            year="2026"
            description="An advanced computer vision system designed to detect and monitor student engagement levels in real-time. It streams webcam data from edge devices (Raspberry Pi) securely via Tailscale to a central laptop server running classification models. The system logs attention metrics directly to a customized database."
            active={false}
            imgSrc="iskomate.png"
            showCaseStudy={false}
            projectLink="https://iskomate-website.vercel.app/"
            tags={['Python', 'Computer Vision', 'Raspberry Pi', 'Tailscale', 'Flutter']}
            sourceLink="https://github.com/Isaac06272/iskomate-app"
          />

          <ProjectCard
            title="RiceGuard"
            year="2026"
            description="An intelligent web application leveraging computer vision to monitor crop health. It analyzes field images to detect early signs of agricultural diseases, preventing yield loss and optimizing yields."
            active={true}
            imgSrc="riceguard.png"
            showCaseStudy={false}
            projectLink="https://riceguard-hkhnr3tgp2lh8pwq2xr9pd.streamlit.app/"
            tags={['Python', 'Streamlit', 'Computer Vision']}
            sourceLink="https://github.com/Isaac06272/riceguard"
          />

          <ProjectCard
            title="Clipforge"
            year="2026"
            description="An AI-powered video editing agent that transforms long-form videos into short, viral-ready clips. Features smart highlight extraction, automatic caption generation, dynamic cropping, and an interactive caption editor for polishing each clip before export."
            active={true}
            imgSrc="clipforge.png"
            showCaseStudy={false}
            projectLink="https://clipforge-lovat-mu.vercel.app/"
            tags={['React', 'Node.js', 'FFmpeg', 'Gemini API']}
            sourceLink="https://github.com/Isaac06272/clipforge"
          />

          <ProjectCard
            title="McDoc"
            year="2026"
            description="A cross-platform mobile application for managing prescriptions and medication schedules. Features real-time adherence tracking, daily dose reminders, and a scan-based prescription intake system for streamlined health management."
            active={true}
            imgSrc="mcdoc.png"
            showCaseStudy={false}
            projectLink="https://github.com/Isaac06272/McDoc"
            tags={['TypeScript', 'Capacitor', 'Supabase', 'Android']}
            sourceLink="https://github.com/Isaac06272/McDoc"
          />

          <ProjectCard
            title="VRUSH"
            year="2026"
            description="A full-stack AI video generation platform that turns simple text prompts into fully produced videos with text-to-speech narration and customizable, burned-in captions. Built with a modern, responsive UI to automate the video production pipeline for social media and content creation."
            active={true}
            imgSrc="vrush.png"
            showCaseStudy={false}
            projectLink="https://vrush-blond.vercel.app/"
            tags={['React', 'Node.js', 'Google GenAI', 'FFmpeg']}
            sourceLink="https://github.com/Isaac06272/vrush"
          />

        </div>
      </section>
    </div>
  );
}

// 3. SKILLS PAGE
function SkillsContent() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'HTML/CSS']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Tailwind CSS', 'Next.js', 'Vue.js', 'Flutter']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python FastAPI', 'Flask']
    },
    {
      category: 'Machine Learning & AI',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LLMs', 'Computer Vision', 'NLP', 'SVM']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git/GitHub', 'Vercel', 'Render', 'Anaconda', 'Colab', 'Jupyter']
    },
    {
      category: 'Databases',
      skills: ['Supabase', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'SQLite']
    }
  ];

  return (
    <div className="w-full bg-transparent min-h-[70vh] pb-16">
      <section className="max-w-[1200px] mx-auto pt-24 px-8 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 text-gray-500 font-mono text-sm tracking-widest uppercase mb-8">
          <span className="w-12 h-[1px] bg-gray-700"></span>
          Skills & Technologies
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold font-sans mb-16">
          Technical Expertise
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((categoryObj, idx) => (
            <div
              key={idx}
              className="group relative p-6 bg-[#11121a]/40 border border-gray-800/50 rounded-xl hover:border-neon/50 hover:bg-[#11121a]/80 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-neon"></div>
                <h2 className="text-xl font-bold font-sans text-white group-hover:text-neon transition-colors">
                  {categoryObj.category}
                </h2>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {categoryObj.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 bg-[#0b0c13]/60 border border-gray-700/60 rounded-full text-sm font-mono text-gray-300 hover:text-neon hover:border-neon transition-all duration-200 cursor-default group-hover:border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 pt-16 border-t border-gray-800">
          <div className="space-y-8">
            <div className="group cursor-default">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-neon font-mono text-sm">01</span>
                <h3 className="text-2xl lg:text-3xl font-bold font-sans group-hover:text-neon transition-colors">
                  Continuously Learning
                </h3>
              </div>
              <p className="text-gray-400 font-sans text-lg leading-relaxed ml-12">
                I stay updated with the latest technologies and best practices in software development, machine learning, and cloud computing.
              </p>
            </div>

            <div className="group cursor-default">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-neon font-mono text-sm">02</span>
                <h3 className="text-2xl lg:text-3xl font-bold font-sans group-hover:text-neon transition-colors">
                  Full-Stack Development
                </h3>
              </div>
              <p className="text-gray-400 font-sans text-lg leading-relaxed ml-12">
                From frontend interfaces to backend systems, I can handle all layers of modern web applications with a focus on clean code and scalability.
              </p>
            </div>

            <div className="group cursor-default">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-neon font-mono text-sm">03</span>
                <h3 className="text-2xl lg:text-3xl font-bold font-sans group-hover:text-neon transition-colors">
                  AI & Machine Learning
                </h3>
              </div>
              <p className="text-gray-400 font-sans text-lg leading-relaxed ml-12">
                Experience with building ML models, training neural networks, and integrating AI solutions into production applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================================= 
   CERTIFICATIONS PAGE (COMMENTED OUT)
   ========================================= */
// 4. CERTIFICATIONS PAGE (ARCHIVED - Will be re-added to portfolio later)
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
function AboutContent({ handleCopyEmail }) {
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
              I'm obsessed with the challenge of building things that work seamlessly. From crafting responsive web apps to training computer vision models to designing mobile-first experiences. I love the entire journey from concept to deployment. Currently focused on AI engineering and cloud infrastructure.
            </p>
            <div className="pt-4">
              <a 
                href="/resume.pdf" 
                download="John_Gwen_Isaac_Austria_CV.pdf"
                className="flex items-center gap-3 border-2 border-neon rounded-full px-8 py-3 text-neon hover:bg-neon hover:text-black transition-colors duration-150 font-mono w-fit cursor-pointer"
              >
                <span className="text-sm font-semibold tracking-wider uppercase">Download CV</span>
              </a>
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
                <img src="profile.png" alt="John Gwen Isaac Austria" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>

        </div>
        
        {/* CONTACT INFORMATION SECTION */}
        <div className="mb-24">
          <div className="flex items-center gap-4 text-gray-500 font-mono text-sm tracking-widest uppercase mb-16 justify-center">
            <span className="w-12 h-[1px] bg-gray-700"></span>
            Get In Touch
            <span className="w-12 h-[1px] bg-gray-700"></span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* Email */}
            <button 
              onClick={handleCopyEmail}
              className="group p-8 bg-[#11121a]/40 border border-gray-800/50 rounded-xl hover:border-neon/50 hover:bg-[#11121a]/80 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <FiMail size={32} className="text-neon mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold font-sans mb-2">Email</h3>
              <p className="text-gray-400 font-mono text-sm break-all hover:text-neon transition-colors">
                johngwenisaacaustria@gmail.com
              </p>
            </button>

            {/* GitHub */}
            <a 
              href="https://github.com/Isaac06272"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-[#11121a]/40 border border-gray-800/50 rounded-xl hover:border-neon/50 hover:bg-[#11121a]/80 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center"
            >
              <FiGithub size={32} className="text-neon mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold font-sans mb-2">GitHub</h3>
              <p className="text-gray-400 font-mono text-sm hover:text-neon transition-colors">
                @Isaac06272
              </p>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/johngwenisaacaustria/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-[#11121a]/40 border border-gray-800/50 rounded-xl hover:border-neon/50 hover:bg-[#11121a]/80 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center"
            >
              <FiLinkedin size={32} className="text-neon mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold font-sans mb-2">LinkedIn</h3>
              <p className="text-gray-400 font-mono text-sm hover:text-neon transition-colors">
                John Gwen Isaac
              </p>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/_jmbzc"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-[#11121a]/40 border border-gray-800/50 rounded-xl hover:border-neon/50 hover:bg-[#11121a]/80 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center"
            >
              <FiInstagram size={32} className="text-neon mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold font-sans mb-2">Instagram</h3>
              <p className="text-gray-400 font-mono text-sm hover:text-neon transition-colors">
                @_jmbzc
              </p>
            </a>
          </div>

          {/* Additional message */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-gray-400 text-lg font-sans leading-relaxed">
              Feel free to reach out for collaborations, project inquiries, or just to connect. I'm always interested in discussing interesting projects and ideas!
            </p>
          </div>
        </div>
      </section>

      {/* Styled Form for the About page - COMMENTED OUT (using direct contact links instead) */}
      {/* <AboutContactForm /> */}
    </div>
  );
}

/* =========================================
   HELPER COMPONENTS
   ========================================= */

// COPY TOAST NOTIFICATION COMPONENT
function CopyToast() {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[9999] animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="flex items-center gap-3 px-6 py-3 bg-[#11121a] border border-neon/50 rounded-full shadow-[0_10px_30px_rgba(0,229,255,0.2)] backdrop-blur-sm">
        <div className="flex items-center justify-center">
          <svg className="w-5 h-5 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-white font-mono text-sm font-semibold">Email copied to clipboard!</span>
      </div>
    </div>
  );
}

// INTERACTIVE MESH COMPONENT
function InteractiveMesh() {
  const canvasRef = useRef(null);
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
        const angle = Math.random() * Math.PI * 2;
        const distortion = Math.sin(angle * 4) * 40 + Math.cos(angle * 3) * 30;
        const radius = (Math.random() * 120) + distortion;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        particles.push({
          x: x,
          y: y,
          baseX: x,
          baseY: y,
          size: Math.random() * 4 + 2.5, 
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

      particles.forEach(p => {
        p.driftAngle += p.driftSpeed;
        const idleX = p.baseX + Math.cos(p.driftAngle) * 5;
        const idleY = p.baseY + Math.sin(p.driftAngle) * 5;

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
          p.x -= (p.x - idleX) * 0.08;
          p.y -= (p.y - idleY) * 0.08;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#00e5ff'; 
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 35) { 
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 229, 255, ${1 - distance/35})`; 
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon/10 blur-[100px] rounded-full pointer-events-none transition-all duration-1000 group-hover:bg-neon/30"></div>
      <canvas ref={canvasRef} className="w-full h-full relative z-10" />
    </div>
  );
}

// ABOUT PAGE CONTACT FORM (USING WEB3FORMS)
function AboutContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // TODO: When deploying, log into Web3Forms and change 'localhost' to the live domain!
          access_key: "6b4230fe-c567-49bb-aec8-b35365409ed8",
          name: name,
          email: email,
          message: message,
          subject: `Portfolio Contact from ${name}`, // Custom email subject
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        
        // Reset success message after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        console.error("Web3Forms Error:", result);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div id="contact-form" className="max-w-[800px] mx-auto w-full px-8 pb-32 pt-16">
      
      <div className="flex items-center gap-4 text-gray-500 font-mono text-sm tracking-widest uppercase mb-12 justify-center">
        <span className="w-12 h-[1px] bg-gray-700"></span>
        Get in Touch
        <span className="w-12 h-[1px] bg-gray-700"></span>
      </div>
      
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-3 flex-1 group">
            <label className="text-gray-400 font-mono text-sm uppercase tracking-wider group-focus-within:text-neon transition-colors">Name</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your secret identity"
              className="bg-[#11121a]/80 backdrop-blur-sm border border-gray-800/80 rounded-xl px-5 py-4 text-base text-white focus:outline-none focus:border-neon transition-colors placeholder-gray-600 w-full font-sans"
            />
          </div>
          <div className="flex flex-col gap-3 flex-1 group">
            <label className="text-gray-400 font-mono text-sm uppercase tracking-wider group-focus-within:text-neon transition-colors">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="I won't spam you, I promise"
              className="bg-[#11121a]/80 backdrop-blur-sm border border-gray-800/80 rounded-xl px-5 py-4 text-base text-white focus:outline-none focus:border-neon transition-colors placeholder-gray-600 w-full font-sans"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 group">
          <label className="text-gray-400 font-mono text-sm uppercase tracking-wider group-focus-within:text-neon transition-colors">Content</label>
          <textarea 
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message goes here"
            rows="6"
            className="bg-[#11121a]/80 backdrop-blur-sm border border-gray-800/80 rounded-xl px-5 py-4 text-base text-white focus:outline-none focus:border-neon transition-colors placeholder-gray-600 w-full resize-y font-sans"
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={`mt-4 w-full px-10 py-5 border-2 rounded-xl font-mono transition-all duration-300 text-lg font-bold tracking-wide flex justify-center items-center gap-3 group
            ${status === 'success' ? 'border-green-500 text-green-500 bg-green-500/10' : 
              status === 'error' ? 'border-red-500 text-red-500 hover:bg-red-500/10' : 
              'border-neon text-neon hover:bg-neon hover:text-black'}
            ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}`}
        >
          {status === 'loading' && 'Sending...'}
          {status === 'success' && 'Message Sent! ✓'}
          {status === 'error' && 'Failed. Try Again.'}
          {status === 'idle' && (
            <>Send Email <span className="group-hover:translate-x-2 transition-transform duration-300">→</span></>
          )}
        </button>

      </form>
    </div>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="bg-[#11121a]/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800/80 hover:border-neon transition-colors duration-300 h-full">
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

// HOMEPAGE CONTACT SECTION (REDIRECTS TO ABOUT FORM)
function ContactSection({ setActiveTab }) {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center text-center space-y-8 px-8 pb-12 pt-16">
      <h2 className="text-5xl lg:text-7xl font-bold font-sans flex items-center gap-3">
        Let's <span className="text-neon">Connect!</span>
      </h2>
      <p className="text-gray-400 font-mono text-lg max-w-2xl leading-relaxed">
        I'm always open to discussing new grad opportunities, exciting projects, or partnership requests. Drop a message and let's build something great together!
      </p>
      <button 
        onClick={() => {
          setActiveTab('About');
          setTimeout(() => {
            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        className="px-10 py-4 border-2 border-neon rounded-full font-mono text-neon hover:bg-neon hover:text-black transition-all duration-300 mt-8 text-lg font-bold tracking-wide"
      >
        Send an email
      </button>
    </div>
  );
}

function FeaturedProject({ num, year, title, desc, active, tags, imgSrc, reverse, projectLink, sourceLink }) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
      <a href={projectLink} target="_blank" rel="noopener noreferrer" className="w-full lg:w-3/5 group cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(0,229,255,0.3)] rounded-xl relative z-10 block">
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
      </a>
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <div className="flex items-center gap-4 font-mono text-sm mb-6">
          <span className="text-neon">{num}</span>
          <span className="text-gray-500">{year}</span>
          <span className="w-8 h-[1px] bg-gray-700"></span>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${active ? 'bg-neon' : 'bg-gray-600'}`}></div>
            <span className={active ? 'text-neon' : 'text-gray-500'}>
              {active ? 'Actively maintained' : 'No longer maintained'}
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
          {sourceLink && (
            <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <FiCode /> Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ALLOWS ONCLICK OR HREF BASED ON PROP
function SocialIcon({ href, onClick, children }) {
  if (onClick) {
    return (
      <button 
        onClick={onClick} 
        className="p-2.5 rounded-full border-2 border-neon text-neon hover:text-black hover:bg-neon transition-colors duration-150 flex items-center justify-center bg-[#0b0c13]"
      >
        {children}
      </button>
    );
  }
  
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

function ProjectCard({ title, year, description, active, imgSrc, projectLink, showCaseStudy, onCaseStudyClick, tags, sourceLink }) {
  return (
    <div className="flex flex-col h-full group transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(0,229,255,0.3)] rounded-xl relative bg-[#11121a]/30 border border-transparent hover:border-neon/50">
      <a href={projectLink} target="_blank" rel="noopener noreferrer" className="block flex-grow cursor-pointer outline-none flex flex-col">
        <div className="bg-[#11121a]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/80 transition-colors duration-300">
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
        
        <div className="mt-6 space-y-3 px-4 flex flex-col flex-grow">
          {tags && (
            <div className="flex items-center gap-2 mb-1">
              <div className={`w-2 h-2 rounded-full ${active ? 'bg-neon' : 'bg-gray-600'}`}></div>
              <span className={`font-mono text-xs ${active ? 'text-neon' : 'text-gray-500'}`}>
                {active ? 'Actively maintained' : 'No longer maintained'}
              </span>
            </div>
          )}
          
          <div className="flex justify-between items-center font-sans">
            <h3 className="text-xl font-bold group-hover:text-neon transition-colors">{title}</h3>
            <span className="font-mono text-gray-500 text-sm">{year}</span>
          </div>
          
          <p className="text-gray-400 font-sans text-base leading-relaxed flex-grow">{description}</p>
          
          {tags && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 border border-gray-700/80 rounded-full text-xs font-mono text-gray-400 cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
      
      <div className="px-4 pb-5 mt-auto pt-6 flex flex-wrap items-center gap-6 relative z-20">
        {showCaseStudy && (
           <button 
             onClick={onCaseStudyClick}
             className="flex w-fit items-center gap-2 text-neon text-sm font-mono hover:underline group-hover:translate-x-2 transition-transform cursor-pointer"
           >
            Case study <FiArrowUpRight />
          </button>
        )}
        
        {sourceLink && (
          <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 text-sm font-mono hover:text-white transition-colors cursor-pointer group/source">
            <FiCode /> <span className="group-hover/source:underline">Source</span>
          </a>
        )}
      </div>
      
      {(!showCaseStudy && !sourceLink) && <div className="pb-6"></div>}
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