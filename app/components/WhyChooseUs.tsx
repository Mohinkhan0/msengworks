import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Compass,
  Cpu,
  Clock,
  Users,
  CheckCircle,
  FileCheck,
  ChevronRight,
} from "lucide-react";
import { WHY_CHOOSE_US_POINTS } from "../data/companyData";

const iconList = [
  <ShieldCheck key="1" className="w-6 h-6 text-[#F28C28]" />,
  <Compass key="2" className="w-6 h-6 text-[#F28C28]" />,
  <Cpu key="3" className="w-6 h-6 text-[#F28C28]" />,
  <Clock key="4" className="w-6 h-6 text-[#F28C28]" />,
  <Users key="5" className="w-6 h-6 text-[#F28C28]" />,
  <CheckCircle key="6" className="w-6 h-6 text-[#F28C28]" />,
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-label="Why Choose Our Manufacturing Workshop"
      className="py-16 md:py-24 bg-white text-[#252B33]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#F28C28]">
            <FileCheck className="w-4 h-4 text-[#F28C28]" />
            <span>Competitive Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B45] tracking-tight">
            Why Choose Us for Precision Machining &amp; Manufacturing
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our commitment to strict tolerances, premium raw materials, transparent communication,
            and reliable turnaround times makes us the trusted engineering partner for demanding
            B2B clients.
          </p>
        </div>

        {/* 6 Key Pillars Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_POINTS.map((item, index) => (
            <div
              key={item.title}
              className="p-8 rounded-sm bg-[#F4F6F8] border border-[#E2E8F0] hover:border-[#172B45] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-sm bg-[#172B45] group-hover:bg-[#263D57] flex items-center justify-center transition-colors">
                    {iconList[index]}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#172B45] bg-white border border-[#E2E8F0] px-2.5 py-1 rounded-sm uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#172B45] group-hover:text-[#F28C28] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Pillar 0{index + 1}</span>
                <span className="text-[#172B45] group-hover:text-[#F28C28] flex items-center gap-1 font-semibold">
                  Standard Assured <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Quality Metrics Ribbon */}
        <div className="mt-14 p-8 bg-[#172B45] text-white rounded-sm border border-[#263D57] shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700">
            <div className="pt-4 md:pt-0">
              <span className="block text-3xl lg:text-4xl font-extrabold text-[#F28C28] font-mono">
                &plusmn;0.01 mm
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-300 mt-1 block">
                Machining Tolerance
              </span>
            </div>
            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="block text-3xl lg:text-4xl font-extrabold text-[#F28C28] font-mono">
                100%
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-300 mt-1 block">
                Metrology Checked
              </span>
            </div>
            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="block text-3xl lg:text-4xl font-extrabold text-[#F28C28] font-mono">
                24/7
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-300 mt-1 block">
                Breakdown Emergency
              </span>
            </div>
            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="block text-3xl lg:text-4xl font-extrabold text-[#F28C28] font-mono">
                OEM Grade
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-300 mt-1 block">
                Material Metallurgy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
