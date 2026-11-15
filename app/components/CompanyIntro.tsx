import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  ShieldCheck,
  Award,
  Users2,
  Check,
  ArrowRight,
  Settings,
} from "lucide-react";
import { COMPANY_CONFIG } from "../data/companyData";

export default function CompanyIntro() {
  return (
    <section
      id="about"
      aria-label="About Company"
      className="py-16 md:py-24 bg-white text-[#252B33]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Workshop Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#E2E8F0] shadow-xl group">
              <div className="relative h-[380px] sm:h-[460px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
                  alt="Industrial manufacturing workshop with heavy precision machinery and lathe stations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#172B45]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-[#F28C28]">
                  Industrial Facility
                </span>
                <p className="text-base font-semibold mt-1">
                  Comprehensive Machining, Tooling &amp; Assembly Shop Floor
                </p>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#172B45] text-white p-4 sm:p-5 rounded-sm border-2 border-white shadow-xl max-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#F28C28] flex items-center justify-center text-white shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl font-bold tracking-tight block">100%</span>
                  <span className="text-[11px] text-slate-300 uppercase tracking-wider block font-medium">
                    Inspection Guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Introduction Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#F28C28]">
                <Settings className="w-4 h-4 text-[#F28C28]" />
                <span>About Our Engineering Works</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B45] tracking-tight leading-tight">
                Reliable Engineering Solutions for Modern Industries
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              At <strong className="text-[#172B45] font-semibold">{COMPANY_CONFIG.name}</strong>,
              we specialize in delivering precision-engineered mechanical components, heavy lathe
              machining, specialized narrow fabric needle loom machinery, and custom die tooling.
              We support textile mills, machinery OEMs, and engineering workshops across India and
              international markets.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Our workshop is engineered around the demanding standards of modern industrial
              manufacturing. By combining heavy-duty lathe machines (Kharad units), radial drilling,
              precision surface and cylindrical grinding, and certified fabrication, we transform
              raw castings and forgings into dependable, mission-critical components that withstand
              high rotational speeds and intense duty cycles.
            </p>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  Precision Lathe Turning &amp; Kharad Machining
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  OEM-Standard Needle Loom Machines &amp; Spares
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  Custom Press Tool &amp; Stamping Die Manufacturing
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  Quick-Turnaround Industrial Repairing &amp; Overhauling
                </span>
              </div>
            </div>

            {/* Industrial Pillars */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#E2E8F0] text-center">
              <div className="p-3 bg-[#F4F6F8] rounded-sm">
                <Wrench className="w-5 h-5 text-[#172B45] mx-auto mb-1" />
                <span className="text-xs font-bold text-[#172B45] block uppercase tracking-wider">
                  Custom Job Work
                </span>
                <span className="text-[11px] text-slate-500">From sample or drawing</span>
              </div>
              <div className="p-3 bg-[#F4F6F8] rounded-sm">
                <ShieldCheck className="w-5 h-5 text-[#172B45] mx-auto mb-1" />
                <span className="text-xs font-bold text-[#172B45] block uppercase tracking-wider">
                  Quality Assured
                </span>
                <span className="text-[11px] text-slate-500">Rigorous micrometer checks</span>
              </div>
              <div className="p-3 bg-[#F4F6F8] rounded-sm">
                <Users2 className="w-5 h-5 text-[#172B45] mx-auto mb-1" />
                <span className="text-xs font-bold text-[#172B45] block uppercase tracking-wider">
                  B2B Expertise
                </span>
                <span className="text-[11px] text-slate-500">Domestic &amp; Export clients</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#172B45] hover:text-[#F28C28] transition-colors group"
              >
                <span>Schedule a Consultation or Request Workshop Tour</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
