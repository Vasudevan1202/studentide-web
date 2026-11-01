import React from "react";
import { Mail, Globe, ArrowUpRight, MessageSquareCode } from "lucide-react";
import { InstagramIcon, LinkedInIcon, GitHubIcon } from "./SocialIcons";
import { FOUNDER_INFO, FounderSocialLink } from "@/lib/constants";

export const ConnectSection: React.FC = () => {
  const renderSocialIcon = (name: string) => {
    switch (name) {
      case "Instagram":
        return <InstagramIcon className="w-6 h-6 text-pink-400" />;
      case "LinkedIn":
        return <LinkedInIcon className="w-6 h-6 text-sky-400" />;
      case "GitHub":
        return <GitHubIcon className="w-6 h-6 text-slate-100" />;
      case "Email":
        return <Mail className="w-6 h-6 text-cyan-400" />;
      case "DeveloperHut":
        return <Globe className="w-6 h-6 text-indigo-400" />;
      default:
        return <Globe className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="connect" className="py-24 sm:py-32 bg-[#070B16] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-indigo-600/10 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Let&apos;s Connect
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether you&apos;re a student, a teacher, a developer, or someone passionate about education and technology &mdash; I&apos;d love to connect.
          </p>
        </div>

        {/* 5 Social & Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {FOUNDER_INFO.socials.map((item: FounderSocialLink, index: number) => {
            const isEmail = item.url.startsWith("mailto:");

            return (
              <a
                key={item.name}
                href={item.url}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className={`group relative rounded-3xl bg-[#10172A]/80 hover:bg-[#131D35] border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/40 ${
                  index === 4 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {renderSocialIcon(item.name)}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm font-mono text-cyan-400 mt-0.5">
                      {item.handle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <span>{item.label}</span>
                  <span className="text-cyan-400">&rarr;</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
