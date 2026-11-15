import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  FileSpreadsheet,
  Cog,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative bg-[#172B45] text-white overflow-hidden"
    >
      {/* Background Industrial Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85"
          alt="Heavy duty lathe machine performing precision turning in an industrial manufacturing workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.28] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172B45] via-[#172B45]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172B45] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Industrial Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#263D57]/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#F28C28] animate-pulse" />
              <span>Heavy Machining &bull; Narrow Fabric Weaving &bull; Tool &amp; Die</span>
            </div>

            {/* Main H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Precision Engineering &amp;{" "}
              <span className="text-[#F28C28] inline-block">Industrial Manufacturing</span>{" "}
              Solutions
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
              Your Trusted Partner for Lathe Work, Needle Loom Manufacturing, Machine Spare Parts,
              Die Making and Industrial Repairing Services.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-[#F28C28] hover:bg-[#d97718] text-white text-base font-semibold px-7 py-3.5 rounded-sm shadow-lg shadow-orange-950/30 transition-all hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#263D57] hover:bg-[#324e6f] text-white border border-slate-600/80 text-base font-semibold px-7 py-3.5 rounded-sm shadow-md transition-all hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <FileSpreadsheet className="w-4 h-4 text-[#F28C28]" />
                <span>Request a Free Quote</span>
              </Link>
            </div>

            {/* Small Trust Indicators */}
            <div className="pt-6 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#F28C28] shrink-0" />
                <span className="text-sm font-semibold tracking-wide text-slate-200">
                  Precision Engineering
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#F28C28] shrink-0" />
                <span className="text-sm font-semibold tracking-wide text-slate-200">
                  Quality Manufacturing
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#F28C28] shrink-0" />
                <span className="text-sm font-semibold tracking-wide text-slate-200">
                  Reliable Industrial Solutions
                </span>
              </div>
            </div>
          </div>

          {/* Right Floating Technical Highlights Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-[#172B45]/90 backdrop-blur-md border border-[#263D57] rounded-sm p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-[#263D57] pb-4">
                <div className="flex items-center gap-2">
                  <Cog className="w-5 h-5 text-[#F28C28] animate-[spin_10s_linear_infinite]" />
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-300">
                    Workshop Spec Sheet
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#F28C28] bg-[#F28C28]/10 px-2 py-0.5 rounded">
                  B2B Certified
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#263D57] rounded-sm text-[#F28C28]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-white text-sm">Machining Tolerance</h2>
                    <p className="text-slate-400">Micro-precision turning up to &plusmn;0.01 mm</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#263D57] rounded-sm text-[#F28C28]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-white text-sm">Needle Loom Engineering</h2>
                    <p className="text-slate-400">High-RPM narrow fabric production looms &amp; spares</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#263D57] rounded-sm text-[#F28C28]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-white text-sm">Tool &amp; Die Making</h2>
                    <p className="text-slate-400">D2/D3 hardened steel stamping &amp; forming dies</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#263D57] text-center">
                <p className="text-[11px] text-slate-400">
                  Ready to manufacture from CAD or physical sample
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
