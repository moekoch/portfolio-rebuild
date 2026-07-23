'use client';

import { Project } from "@/data/projects";
import { Heading, Text, Flex } from "@radix-ui/themes";
import { Cross2Icon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-stone-200 bg-white p-8 shadow-2xl dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#F3F4F6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (X) */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-stone-200 bg-stone-50 hover:bg-stone-100 dark:border-[#374151] dark:bg-[#0B0F19] dark:hover:bg-[#1F2937] transition-colors"
          aria-label="Close Modal"
        >
          <Cross2Icon width="18" height="18" />
        </button>

        {/* Category & Date */}
        <div className="flex justify-between items-center mb-4 pr-12">
          <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#5E7A5A]/15 text-[#5E7A5A] border border-[#5E7A5A]/30 dark:bg-[#0B0F19] dark:text-[#94B39C] dark:border-[#1F2937]">
            {project.category}
          </span>
          <span className="text-xs font-mono text-stone-500 dark:text-[#9CA3AF]">{project.date}</span>
        </div>

        {/* Title */}
        <Heading size="6" className="tracking-tight mb-4 text-slate dark:text-[#F3F4F6]">
          {project.title}
        </Heading>

        {/* Image Preview if available */}
        {project.image && (
          <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden border border-stone-200 dark:border-[#1F2937] bg-stone-100 dark:bg-stone-900">
            <Image 
              src={project.image}
              alt={`${project.title} Preview`}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Long Description */}
        <Text size="3" className="block leading-relaxed mb-6 font-normal text-stone-700 dark:text-[#D1D5DB]">
          {project.longDescription}
        </Text>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-stone-100 border border-stone-200 text-slate-800 dark:bg-[#0B0F19] dark:border-[#1F2937] dark:text-[#E5E7EB]">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Links / Demo Note */}
        <div className="pt-4 border-t border-stone-100 dark:border-[#1F2937] flex items-center">
          {project.github ? (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-medium text-xs tracking-widest uppercase px-5 py-3 rounded-full border border-stone-300 bg-white text-slate hover:border-[#5E7A5A] dark:border-[#374151] dark:bg-[#0B0F19] dark:text-[#FFFFFF] dark:hover:border-[#94B39C] shadow-2xs transition-all"
            >
              <GitHubLogoIcon width="16" height="16" />
              View on GitHub
            </a>
          ) : (
            <span className="text-xs font-mono font-medium tracking-wide text-stone-500 dark:text-[#9CA3AF] px-3 py-2 rounded-xl bg-stone-100 dark:bg-[#0B0F19] border border-stone-200 dark:border-[#1F2937]">
              {project.demoNote || "Private Repo"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}