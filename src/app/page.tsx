'use client';

import { useState, useEffect } from "react";
import { Box, Heading, Text, Flex } from "@radix-ui/themes";
import { ArrowRightIcon, GitHubLogoIcon, LinkedInLogoIcon, SunIcon, MoonIcon, DownloadIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { projectsData, Project } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'shortcut icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = '/heart.png';
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <main className="min-h-screen transition-colors duration-300 relative overflow-hidden font-sans bg-cream text-slate dark:bg-[#0B0F19] dark:text-[#F3F4F6]">
      
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#94B39C]/40 via-[#E09F84]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D8B963]/30 via-[#C66B4E]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-2/3 left-0 w-[650px] h-[650px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B4C5D2]/30 via-[#5E7A5A]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E09F84]/30 via-[#D8B963]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* HEADER */}
      <header className="flex justify-between items-center px-6 md:px-12 py-6 mb-24 border-b border-stone-200/60 bg-cream/70 dark:border-[#1F2937] dark:bg-[#0B0F19]/70 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6">
            <Image 
              src="/heart.png" 
              alt="Heart Favicon Icon" 
              fill
              className="object-contain"
            />
          </div>
          <Text weight="bold" size="5" className="tracking-tighter text-slate dark:text-[#F3F4F6]">
            Morgan E. Koch
          </Text>
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8 text-base font-bold uppercase tracking-widest text-slate-900 dark:text-[#F3F4F6]">
            <a href="#contact" className="hover:text-[#5E7A5A] dark:hover:text-[#94B39C] transition-colors">Connect</a>
            <a href="#experience" className="hover:text-[#5E7A5A] dark:hover:text-[#94B39C] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#5E7A5A] dark:hover:text-[#94B39C] transition-colors">Projects</a>
            <a href="#stack" className="hover:text-[#5E7A5A] dark:hover:text-[#94B39C] transition-colors">Stack</a>
          </nav>

          <button 
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full border transition-all border-stone-300 bg-white text-slate-700 hover:bg-stone-100 dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#F3F4F6] dark:hover:bg-[#1F2937] shadow-xs"
            aria-label="Toggle Light/Dark Mode"
          >
            {darkMode ? <SunIcon width="18" height="18" /> : <MoonIcon width="18" height="18" />}
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6">

        {/* HERO SECTION */}
        <section className="mb-24 grid md:grid-cols-12 gap-12 items-center relative">
          
          <div className="md:col-span-7 p-8 md:p-12 rounded-3xl border backdrop-blur-md transition-all duration-500 relative border-stone-200 bg-white/80 shadow-sm dark:border-[#1F2937] dark:bg-[#111827]/80 dark:text-[#F3F4F6] dark:shadow-xl z-10">
            
            <div className="inline-block px-3 py-1 rounded-full border border-[#94B39C]/40 bg-[#94B39C]/15 mb-6">
              <Text className="text-[#5E7A5A] dark:text-[#94B39C] text-base font-bold tracking-widest uppercase">
                Software Engineer // App Dev Manager
              </Text>
            </div>

            <Heading size="8" className="mb-6 leading-[1.1] tracking-tighter text-slate dark:text-[#F3F4F6]">
              Hi, I&apos;m Morgan! <br />
              <span className="text-[#5E7A5A] dark:text-[#94B39C] italic font-light">Turning ambitious ideas into thoughtful products.</span>
            </Heading>
            
            <Text size="5" className="block mb-8 leading-relaxed font-normal text-slate-700 dark:text-[#D1D5DB]">
              Computer Science and MIS student at Penn State Behrend (Graduating May 2027). Whether I&apos;m leading a team, designing a product, or writing code, I&apos;m driven by curiosity and a desire to make complex ideas feel simple.
            </Text>

            <Flex gap="5" align="center">
              <a href="#projects" className="group flex items-center gap-3 font-medium text-base tracking-widest uppercase transition-colors px-6 py-3 rounded-full border border-stone-300 bg-white text-slate hover:border-[#5E7A5A] dark:border-[#374151] dark:bg-[#0B0F19] dark:text-[#FFFFFF] dark:hover:border-[#94B39C] shadow-2xs">
                View Projects 
                <ArrowRightIcon className="group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </Flex>

            {/* OVERLAPPING SIGNATURE */}
            <div className="absolute -bottom-10 -right-2 md:-bottom-12 md:-right-2 pointer-events-none z-20 opacity-90 dark:opacity-80 rotate-[-4deg]">
              <Image 
                src="/signature.png" 
                alt="Morgan E. Koch Signature" 
                width={210} 
                height={82} 
                className="object-contain filter dark:invert dark:brightness-200"
              />
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] h-[420px] rounded-3xl p-[2px] bg-gradient-to-b from-slate-100 via-slate-300 to-slate-400 dark:from-slate-700 dark:via-slate-500 dark:to-slate-800 shadow-[0_0_20px_rgba(255,255,255,0.4)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] group transition-all duration-300">
              <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-white/40 dark:bg-[#111827]/40 backdrop-blur-md">
                <Image 
                  src="/headshot.jpg"
                  alt="Morgan E. Koch Headshot"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-black/25 dark:opacity-100 opacity-0 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          </div>

        </section>

        <div className="my-24 text-center">
          <span className="text-stone-400 dark:text-[#6B7280] text-base tracking-widest">· · · ✦ · · ·</span>
        </div>

        {/* FOOTER / CONTACT */}
        <section id="contact" className="mb-24 scroll-mt-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 p-8 rounded-3xl border transition-all duration-500 border-stone-200 bg-white/80 shadow-sm dark:border-[#1F2937] dark:bg-[#111827]/80 dark:text-[#F3F4F6] backdrop-blur-md">
            <div>
              <Text className="font-mono text-5xl tracking-tighter mb-4 block text-stone-400 dark:text-[#9CA3AF]">01</Text>
              <Heading size="8" className="tracking-tighter leading-none mb-6 text-slate dark:text-[#F3F4F6]">
                Actively seeking 2027 <br /> entry-level SWE roles.
              </Heading>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <a href="mailto:ekoch.morgan@gmail.com" className="text-[#5E7A5A] dark:text-[#94B39C] text-xl tracking-tight transition-colors border-b border-[#94B39C]/60 dark:border-[#94B39C] hover:border-slate dark:hover:border-[#F3F4F6] pb-1">
                  ekoch.morgan@gmail.com
                </a>

                <a 
                  href="/MorganKochResume_Summer2026Portfolio.pdf" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-base tracking-widest uppercase px-5 py-3 rounded-full border border-stone-300 bg-white text-slate hover:border-[#5E7A5A] dark:border-[#374151] dark:bg-[#0B0F19] dark:text-[#FFFFFF] dark:hover:border-[#94B39C] shadow-2xs transition-all duration-300"
                >
                  <DownloadIcon width="16" height="16" />
                  Download My Resume
                </a>
              </div>
            </div>
            
            <Flex gap="4">
              <a href="https://github.com/moekoch" className="p-3 rounded-2xl border transition-all border-stone-300 bg-stone-50 text-slate-700 hover:text-[#5E7A5A] hover:border-[#5E7A5A] dark:border-[#374151] dark:bg-[#0B0F19] dark:text-[#FFFFFF] dark:hover:text-[#94B39C]" target="_blank" rel="noreferrer">
                <GitHubLogoIcon width="20" height="20" />
              </a>
              <a href="https://www.linkedin.com/in/moekoch" className="p-3 rounded-2xl border transition-all border-stone-300 bg-stone-50 text-slate-700 hover:text-[#5E7A5A] hover:border-[#5E7A5A] dark:border-[#374151] dark:bg-[#0B0F19] dark:text-[#FFFFFF] dark:hover:text-[#94B39C]" target="_blank" rel="noreferrer">
                <LinkedInLogoIcon width="20" height="20" />
              </a>
            </Flex>
          </div>
        </section>

        <div className="my-24 text-center">
          <span className="text-stone-400 dark:text-[#6B7280] text-base tracking-widest">· · · ✦ · · ·</span>
        </div>

        {/* WORK EXPERIENCE SECTION */}
        <section id="experience" className="mb-24 scroll-mt-32">
          <div className="grid md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-4 p-6 rounded-2xl border transition-all duration-300 border-stone-200 bg-white/40 dark:border-[#1F2937] dark:bg-[#111827]/40 backdrop-blur-md shadow-xs">
              <Text className="font-mono text-5xl tracking-tighter text-stone-400 dark:text-[#9CA3AF]">02</Text>
              <Heading size="7" className="mt-2 uppercase tracking-widest text-base text-slate dark:text-[#F3F4F6]">Work Experience</Heading>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            
            <Box className="group p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden border-stone-200 bg-white/80 shadow-sm dark:border-[#1F2937] dark:bg-[#111827]/80 dark:text-[#F3F4F6] backdrop-blur-md">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#E09F84] transition-colors"></div>
              <Flex justify="between" align="baseline" className="mb-1 flex-wrap gap-2">
                <Heading size="7" className="tracking-tight text-slate dark:text-[#F3F4F6]">App Development Manager / Software Engineer</Heading>
                <Text className="text-base font-mono font-semibold px-3 py-1 rounded-full bg-[#E09F84]/15 text-[#9E5D42] border border-[#E09F84]/30 dark:bg-[#0B0F19] dark:text-[#E09F84] dark:border-[#1F2937]">March 2025 - Present</Text>
              </Flex>
              <Text className="text-[#C66B4E] dark:text-[#E09F84] text-base font-bold tracking-widest uppercase mb-6 block">The VAR Lab @ Penn State Behrend | Erie, PA</Text>
              <ul className="list-none space-y-3">
                <li className="text-base leading-relaxed font-normal flex items-start gap-3 text-slate-700 dark:text-[#D1D5DB]">
                  <span className="text-[#C66B4E] dark:text-[#E09F84] mt-1 font-bold">▪</span>
                  Engineered and deployed Landing Place, an AI-enabled React Native/Expo mobile application (iOS) for clinical research and outcome tracking.
                </li>
                <li className="text-base leading-relaxed font-normal flex items-start gap-3 text-slate-700 dark:text-[#D1D5DB]">
                  <span className="text-[#C66B4E] dark:text-[#E09F84] mt-1 font-bold">▪</span>
                  Revived a non-functional legacy codebase and led a 5-person team to deliver a production-ready application within 1 academic year.
                </li>
                <li className="text-base leading-relaxed font-normal flex items-start gap-3 text-slate-700 dark:text-[#D1D5DB]">
                  <span className="text-[#C66B4E] dark:text-[#E09F84] mt-1 font-bold">▪</span>
                  Owned the end-to-end release lifecycle, including build automation, versioning, provisioning, and TestFlight distribution for internal testing and active clinical trials deployed to ~80 participants.
                </li>
              </ul>
            </Box>

            <Box className="group p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden border-stone-200 bg-white/80 shadow-sm dark:border-[#1F2937] dark:bg-[#111827]/80 dark:text-[#F3F4F6] backdrop-blur-md">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#94B39C] transition-colors"></div>
              <Flex justify="between" align="baseline" className="mb-1 flex-wrap gap-2">
                <Heading size="7" className="tracking-tight text-slate dark:text-[#F3F4F6]">IT Product Management Intern</Heading>
                <Text className="text-base font-mono font-semibold px-3 py-1 rounded-full bg-[#94B39C]/15 text-[#3E523A] border border-[#94B39C]/30 dark:bg-[#0B0F19] dark:text-[#94B39C] dark:border-[#1F2937]">May 2026 - July 2026</Text>
              </Flex>
              <Text className="text-[#5E7A5A] dark:text-[#94B39C] text-base font-bold tracking-widest uppercase mb-6 block">Members 1st Federal Credit Union | Enola, PA</Text>
              <ul className="list-none space-y-3">
                <li className="text-base leading-relaxed font-normal flex items-start gap-3 text-slate-700 dark:text-[#D1D5DB]">
                  <span className="text-[#5E7A5A] dark:text-[#94B39C] mt-1 font-bold">▪</span>
                  Defined the technical implementation strategy for an AI-driven smart summary/chat module within digital banking.
                </li>
                <li className="text-base leading-relaxed font-normal flex items-start gap-3 text-slate-700 dark:text-[#D1D5DB]">
                  <span className="text-[#5E7A5A] dark:text-[#94B39C] mt-1 font-bold">▪</span>
                  Evaluated and documented AI architectural patterns within Azure, establishing clear implementation methodologies for when to utilize LlamaIndex (RAG-heavy tasks) versus LangChain (agentic workflows) across legacy banking infrastructure.
                </li>
                <li className="text-base leading-relaxed font-normal flex items-start gap-3 text-slate-700 dark:text-[#D1D5DB]">
                  <span className="text-[#5E7A5A] dark:text-[#94B39C] mt-1 font-bold">▪</span>
                  Conducted market and competitive research on AI-driven fintech experiences, establishing best practices for conversational banking, guardrails, auditability, and responsible AI deployment in regulated environments.
                </li>
              </ul>
            </Box>

            <Box className="group p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden border-stone-200 bg-white/80 shadow-sm dark:border-[#1F2937] dark:bg-[#111827]/80 dark:text-[#F3F4F6] backdrop-blur-md">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#B4C5D2] transition-colors"></div>
              <Flex justify="between" align="baseline" className="mb-1 flex-wrap gap-2">
                <Heading size="7" className="tracking-tight text-slate dark:text-[#F3F4F6]">Student Technician</Heading>
                <Text className="text-base font-mono font-semibold px-3 py-1 rounded-full bg-[#B4C5D2]/15 text-[#4A6378] border border-[#B4C5D2]/30 dark:bg-[#0B0F19] dark:text-[#B4C5D2] dark:border-[#1F2937]">April 2024 - December 2025</Text>
              </Flex>
              <Text className="text-[#5B7891] dark:text-[#B4C5D2] text-base font-bold tracking-widest uppercase mb-6 block">Penn State Erie, The Behrend College | Erie, Pennsylvania, United States</Text>
              <ul className="list-none space-y-3">
                <li className="text-base leading-relaxed font-normal flex items-start gap-3 text-slate-700 dark:text-[#D1D5DB]">
                  <span className="text-[#5B7891] dark:text-[#B4C5D2] mt-1 font-bold">▪</span>
                  Provided IT support in 30+ computer labs, classrooms, and offices.
                </li>
                <li className="text-base leading-relaxed font-normal flex items-start gap-3 text-slate-700 dark:text-[#D1D5DB]">
                  <span className="text-[#5B7891] dark:text-[#B4C5D2] mt-1 font-bold">▪</span>
                  Responded to staff members to resolve 200+ tech-related issues using ticketing system ServiceNow.
                </li>
                <li className="text-base leading-relaxed font-normal flex items-start gap-3 text-slate-700 dark:text-[#D1D5DB]">
                  <span className="text-[#5B7891] dark:text-[#B4C5D2] mt-1 font-bold">▪</span>
                  Processed salvageable devices and securely wiped 100+ disks using KillDisk.
                </li>
              </ul>
            </Box>

            <Box className="group p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden border-stone-200 bg-white/80 shadow-sm dark:border-[#1F2937] dark:bg-[#111827]/80 dark:text-[#F3F4F6] backdrop-blur-md">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#D8B963] transition-colors"></div>
              <Flex justify="between" align="baseline" className="mb-1 flex-wrap gap-2">
                <Heading size="7" className="tracking-tight text-slate dark:text-[#F3F4F6]">IT Project Management Intern</Heading>
                <Text className="text-base font-mono font-semibold px-3 py-1 rounded-full bg-[#D8B963]/15 text-[#856D29] border border-[#D8B963]/30 dark:bg-[#0B0F19] dark:text-[#D8B963] dark:border-[#1F2937]">May 2025 - August 2025</Text>
              </Flex>
              <Text className="text-[#B59436] dark:text-[#D8B963] text-base font-bold tracking-widest uppercase mb-6 block">TE Connectivity | Middletown, PA</Text>
              <ul className="list-none space-y-3">
                <li className="text-base leading-relaxed font-normal flex items-start gap-3 text-slate-700 dark:text-[#D1D5DB]">
                  <span className="text-[#B59436] dark:text-[#D8B963] mt-1 font-bold">▪</span>
                  Facilitated 15+ stakeholder alignment meetings across 4 multi-functional corporate teams, tracking project milestones and managing cross-departmental communications.
                </li>
                <li className="text-base leading-relaxed font-normal flex items-start gap-3 text-slate-700 dark:text-[#D1D5DB]">
                  <span className="text-[#B59436] dark:text-[#D8B963] mt-1 font-bold">▪</span>
                  Contributed to foundational documentation, authoring 10+ core components of Concept of Operations (CONOPS), Business Requirement Documents (BRDs), and RASCI charts.
                </li>
              </ul>
            </Box>

            <Box className="group p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden border-stone-200 bg-white/80 shadow-sm dark:border-[#1F2937] dark:bg-[#111827]/80 dark:text-[#F3F4F6] backdrop-blur-md">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#C66B4E] transition-colors"></div>
              <Flex justify="between" align="baseline" className="mb-1 flex-wrap gap-2">
                <Heading size="7" className="tracking-tight text-slate dark:text-[#F3F4F6]">Information Technology Intern</Heading>
                <Text className="text-base font-mono font-semibold px-3 py-1 rounded-full bg-[#C66B4E]/15 text-[#8C3F26] border border-[#C66B4E]/30 dark:bg-[#0B0F19] dark:text-[#C66B4E] dark:border-[#1F2937]">June 2023 - August 2024</Text>
              </Flex>
              <Text className="text-[#C66B4E] dark:text-[#C66B4E] text-base font-bold tracking-widest uppercase mb-6 block">Big Spring School District | Newville, PA</Text>
              <ul className="list-none space-y-3">
                <li className="text-base leading-relaxed font-normal flex items-start gap-3 text-slate-700 dark:text-[#D1D5DB]">
                  <span className="text-[#C66B4E] dark:text-[#C66B4E] mt-1 font-bold">▪</span>
                  Collaborated with a 3-person team to facilitate device preparation and domain deployment for 1,500+ student units.
                </li>
                <li className="text-base leading-relaxed font-normal flex items-start gap-3 text-slate-700 dark:text-[#D1D5DB]">
                  <span className="text-[#C66B4E] dark:text-[#C66B4E] mt-1 font-bold">▪</span>
                  Repaired 250+ student laptops and streamlined district inventory workflows.
                </li>
              </ul>
            </Box>

          </div>
        </section>

        <div className="my-24 text-center">
          <span className="text-stone-400 dark:text-[#6B7280] text-base tracking-widest">· · · ✦ · · ·</span>
        </div>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-24 scroll-mt-32">
          <div className="grid md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-4 p-6 rounded-2xl border transition-all duration-300 border-stone-200 bg-white/40 dark:border-[#1F2937] dark:bg-[#111827]/40 backdrop-blur-md shadow-xs">
              <Text className="font-mono text-5xl tracking-tighter text-stone-400 dark:text-[#9CA3AF]">03</Text>
              <Heading size="7" className="mt-2 uppercase tracking-widest text-base text-slate dark:text-[#F3F4F6]">Featured Projects</Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {projectsData.map((project, idx) => {
              const cardAccents = [
                { badgeBg: "bg-[#E09F84]/15", badgeText: "text-[#9E5D42]", badgeBorder: "border-[#E09F84]/30", hoverBorder: "hover:border-[#E09F84]", headingHover: "group-hover:text-[#C66B4E] dark:group-hover:text-[#E09F84]", linkText: "text-[#C66B4E] dark:text-[#E09F84]", linkBorder: "border-[#E09F84]" },
                { badgeBg: "bg-[#D8B963]/15", badgeText: "text-[#856D29]", badgeBorder: "border-[#D8B963]/30", hoverBorder: "hover:border-[#D8B963]", headingHover: "group-hover:text-[#B59436] dark:group-hover:text-[#D8B963]", linkText: "text-[#B59436] dark:text-[#D8B963]", linkBorder: "border-[#D8B963]" },
                { badgeBg: "bg-[#B4C5D2]/15", badgeText: "text-[#4A6378]", badgeBorder: "border-[#B4C5D2]/30", hoverBorder: "hover:border-[#B4C5D2]", headingHover: "group-hover:text-[#5B7891] dark:group-hover:text-[#B4C5D2]", linkText: "text-[#5B7891] dark:group-hover:text-[#B4C5D2]", linkBorder: "border-[#B4C5D2]" },
                { badgeBg: "bg-[#C66B4E]/15", badgeText: "text-[#8C3F26]", badgeBorder: "border-[#C66B4E]/30", hoverBorder: "hover:border-[#C66B4E]", headingHover: "group-hover:text-[#C66B4E] dark:group-hover:text-[#C66B4E]", linkText: "text-[#C66B4E] dark:text-[#C66B4E]", linkBorder: "border-[#C66B4E]" },
              ];
              const accent = cardAccents[idx % cardAccents.length];

              return (
                <div 
                  key={idx}
                  onClick={() => setSelectedProject(project)}
                  className={`group border p-8 rounded-3xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden cursor-pointer border-stone-200 bg-white/80 shadow-sm ${accent.hoverBorder} hover:shadow-xl dark:border-[#1F2937] dark:bg-[#111827]/80 dark:text-[#F3F4F6] dark:${accent.hoverBorder} backdrop-blur-md`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Text className={`text-base font-bold tracking-widest uppercase px-3 py-1 rounded-full ${accent.badgeBg} ${accent.badgeText} border ${accent.badgeBorder} dark:bg-[#0B0F19] dark:${accent.badgeText} dark:border-[#1F2937]`}>
                        {project.category}
                      </Text>
                      <Text className="text-base font-mono text-stone-500 dark:text-[#9CA3AF]">{project.date}</Text>
                    </div>
                    <Heading size="7" className={`tracking-tight mb-3 transition-colors text-slate dark:text-[#F3F4F6] ${accent.headingHover}`}>
                      {project.title}
                    </Heading>
                    <p className="text-base leading-relaxed font-normal mb-6 text-slate-700 dark:text-[#D1D5DB]">
                      {project.description}
                    </p>
                  </div>
                  
                  <Flex justify="between" align="center" className="pt-4 border-t border-stone-100 dark:border-[#1F2937]">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tIdx} className="text-base font-mono font-semibold px-2.5 py-1 rounded-lg bg-stone-100 border border-stone-200 text-slate-800 dark:bg-[#0B0F19] dark:border-[#1F2937] dark:text-[#E5E7EB]">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-base font-mono px-2 py-1 text-stone-500 dark:text-[#9CA3AF]">+{project.tags.length - 3}</span>
                      )}
                    </div>
                    <span className={`text-base font-bold uppercase tracking-widest ${accent.linkText} flex items-center gap-1 group-hover:translate-x-1 transition-transform`}>
                      Details <ArrowRightIcon />
                    </span>
                  </Flex>
                </div>
              );
            })}

          </div>

          <div className="text-center p-8 rounded-3xl border backdrop-blur-md transition-all duration-300 border-stone-200 bg-white/40 dark:border-[#1F2937] dark:bg-[#111827]/40 shadow-xs">
            <Text size="5" className="mb-3 block font-normal text-slate-700 dark:text-[#F3F4F6]">
              Want to see more? Browse my{" "}
              <a
                href="https://github.com/moekoch/portfolio-rebuild"
                target="_blank"
                rel="noreferrer"
                className="text-[#5E7A5A] dark:text-[#94B39C] underline decoration-[#94B39C]/60 hover:decoration-[#3E523A] transition-colors"
              >
                code behind this website
              </a>
              {" "}and the rest of my work on GitHub.
            </Text>

            <a
              href="https://github.com/moekoch"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#5E7A5A] dark:text-[#94B39C] text-base tracking-widest uppercase hover:text-[#3E523A] dark:hover:text-[#B4D0B8] transition-colors"
            >
              <span className="font-bold underline underline-offset-4 decoration-[#94B39C]/70 hover:decoration-[#3E523A]">
                Explore my GitHub
              </span>
              <ArrowRightIcon />
            </a>
          </div>
        </section>

        <div className="my-24 text-center">
          <span className="text-stone-400 dark:text-[#6B7280] text-base tracking-widest">· · · ✦ · · ·</span>
        </div>

        {/* SKILLS SECTION */}
        <section id="stack" className="mb-24 scroll-mt-32">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 p-6 rounded-2xl border transition-all duration-300 border-stone-200 bg-white/40 dark:border-[#1F2937] dark:bg-[#111827]/40 backdrop-blur-md shadow-xs">
              <Text className="font-mono text-5xl tracking-tighter text-stone-400 dark:text-[#9CA3AF]">04</Text>
              <Heading size="7" className="mt-2 uppercase tracking-widest text-base text-slate dark:text-[#F3F4F6]">Technical Stack</Heading>
            </div>
            <div className="md:col-span-8 p-8 rounded-3xl border transition-all duration-500 border-stone-200 bg-white/80 shadow-sm dark:border-[#1F2937] dark:bg-[#111827]/80 dark:text-[#F3F4F6] backdrop-blur-md">
              <Heading size="7" className="mb-6 leading-tight tracking-tight text-slate dark:text-[#F3F4F6]">
                Building modern software with a focus on thoughtful engineering.
              </Heading>
              <Text size="5" className="leading-relaxed mb-8 block font-normal text-slate-700 dark:text-[#D1D5DB]">
                I enjoy developing full-stack applications and exploring applied AI, retrieval-augmented generation (RAG), and agentic workflows that solve practical problems.
              </Text>
              
              <div className="flex flex-wrap gap-2">
                {["Java", "JavaScript", "C/C++", "Python", "SQL", "React Native", "Expo", "Azure", "RAG Systems", "LlamaIndex", "LangChain", "Supabase", "Git", "Docker", "Figma", "MySQL", "MongoDB", "Firebase"].map((skill) => (
                  <span key={skill} className="px-4 py-2 border rounded-xl text-base font-semibold tracking-wide transition-all cursor-default border-stone-200 bg-stone-50 text-slate-800 hover:border-[#5E7A5A] hover:text-[#5E7A5A] hover:bg-white dark:border-[#374151] dark:bg-[#0B0F19] dark:text-[#FFFFFF] dark:hover:bg-[#1F2937] dark:hover:text-[#94B39C]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-24 pt-12 pb-16 border-t border-stone-200/60 dark:border-[#1F2937] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Text size="2" className="text-stone-500 dark:text-[#9CA3AF]">
            © {new Date().getFullYear()} Morgan E. Koch. All rights reserved.
          </Text>

          <div className="flex items-center gap-4">
            <a 
              href="mailto:ekoch.morgan@gmail.com" 
              className="p-2.5 rounded-full border border-stone-300 bg-white text-slate-700 hover:border-[#5E7A5A] hover:text-[#5E7A5A] dark:border-[#374151] dark:bg-[#111827] dark:text-[#F3F4F6] dark:hover:text-[#94B39C] dark:hover:border-[#94B39C] transition-all"
              aria-label="Email Morgan"
            >
              <EnvelopeClosedIcon width="18" height="18" />
            </a>
            <a 
              href="https://github.com/moekoch" 
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-full border border-stone-300 bg-white text-slate-700 hover:border-[#5E7A5A] hover:text-[#5E7A5A] dark:border-[#374151] dark:bg-[#111827] dark:text-[#F3F4F6] dark:hover:text-[#94B39C] dark:hover:border-[#94B39C] transition-all"
              aria-label="GitHub Profile"
            >
              <GitHubLogoIcon width="18" height="18" />
            </a>
            <a 
              href="https://www.linkedin.com/in/moekoch" 
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-full border border-stone-300 bg-white text-slate-700 hover:border-[#5E7A5A] hover:text-[#5E7A5A] dark:border-[#374151] dark:bg-[#111827] dark:text-[#F3F4F6] dark:hover:text-[#94B39C] dark:hover:border-[#94B39C] transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedInLogoIcon width="18" height="18" />
            </a>
          </div>
        </footer>

      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)} 
      />

      <Analytics />
      <SpeedInsights />
    </main>
  );
}