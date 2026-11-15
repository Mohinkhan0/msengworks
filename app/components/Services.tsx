import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Wrench,
  Cog,
  Hammer,
  RotateCcw,
} from "lucide-react";
import { SERVICES_DATA } from "../data/companyData";

const iconMap: Record<string, React.ReactNode> = {
  "lathe-machine-work": <Cog className="w-5 h-5 text-[#F28C28]" />,
  "needle-loom-manufacturing": <Cpu className="w-5 h-5 text-[#F28C28]" />,
  "needle-loom-spare-parts": <Layers className="w-5 h-5 text-[#F28C28]" />,
  "custom-die-manufacturing": <Hammer className="w-5 h-5 text-[#F28C28]" />,
  "drilling-grinding-welding": <Wrench className="w-5 h-5 text-[#F28C28]" />,
  "repairing-and-maintenance": <RotateCcw className="w-5 h-5 text-[#F28C28]" />,
};

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Industrial Manufacturing & Engineering Services"
      className="py-16 md:py-24 bg-[#F4F6F8] text-[#252B33] border-y border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#172B45] text-white text-xs font-bold tracking-widest uppercase">
            <Cog className="w-3.5 h-3.5 text-[#F28C28]" />
            <span>Industrial Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B45] tracking-tight">
            Our Industrial Manufacturing &amp; Engineering Services
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Delivering high-precision machining, custom machine fabrication, die making, and rapid
            industrial repair services engineered to exacting industrial tolerances.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <article
              key={service.id}
              className="bg-white rounded-sm border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Service Card Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <Image
                  src={service.imageUrl}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B45]/80 via-transparent to-transparent" />

                {/* Service Tag Badge */}
                <div className="absolute top-3 left-3 bg-[#172B45]/90 backdrop-blur-sm text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm border border-slate-600/50">
                  {service.tag}
                </div>

                {/* Service Number */}
                <div className="absolute bottom-3 right-3 text-2xl font-black text-white/70 font-mono">
                  0{index + 1}
                </div>
              </div>

              {/* Service Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {iconMap[service.id]}
                    <span className="text-xs uppercase font-bold tracking-wider text-[#F28C28]">
                      {service.subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#172B45] group-hover:text-[#F28C28] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Key Bullet Points */}
                <ul className="space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F28C28] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More / Enquiry Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`#contact`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#172B45] group-hover:text-[#F28C28] transition-colors"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <span>Learn More &amp; Inquire</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[11px] font-mono text-slate-400">Custom Spec</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 bg-[#172B45] text-white rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#263D57] rounded-sm text-[#F28C28]">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base">Require Custom Job Work or Drawing Review?</h4>
              <p className="text-xs text-slate-300">
                Send us your 2D/3D component drawings or courier physical samples for prototype inspection.
              </p>
            </div>
          </div>
          <Link
            href="#contact"
            className="shrink-0 bg-[#F28C28] hover:bg-[#d97718] text-white font-semibold text-sm px-6 py-2.5 rounded-sm shadow transition-colors"
          >
            Submit Engineering Drawings
          </Link>
        </div>
      </div>
    </section>
  );
}
