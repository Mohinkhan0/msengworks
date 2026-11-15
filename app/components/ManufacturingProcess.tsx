import React from "react";
import Link from "next/link";
import {
  FileText,
  Compass,
  Cog,
  CheckCheck,
  Truck,
  ArrowRight,
  Workflow,
} from "lucide-react";
import { PROCESS_STEPS } from "../data/companyData";

const stepIcons = [
  <FileText key="1" className="w-6 h-6 text-white" />,
  <Compass key="2" className="w-6 h-6 text-white" />,
  <Cog key="3" className="w-6 h-6 text-white" />,
  <CheckCheck key="4" className="w-6 h-6 text-white" />,
  <Truck key="5" className="w-6 h-6 text-white" />,
];

export default function ManufacturingProcess() {
  return (
    <section
      id="process"
      aria-label="Manufacturing and Quality Process"
      className="py-16 md:py-24 bg-white text-[#252B33]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#F28C28]">
            <Workflow className="w-4 h-4 text-[#F28C28]" />
            <span>Workflow &amp; Quality Control</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B45] tracking-tight">
            Our 5-Stage Precision Manufacturing Process
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Every component and machine follows a systematic engineering procedure from initial
            sample study to final metrology sign-off and dispatch.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.stepNumber}
              className="relative flex flex-col bg-[#F4F6F8] rounded-sm p-6 border border-[#E2E8F0] hover:border-[#172B45] hover:shadow-lg transition-all duration-300 group"
            >
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-sm bg-[#172B45] group-hover:bg-[#F28C28] flex items-center justify-center transition-colors shadow-md">
                  {stepIcons[index]}
                </div>
                <span className="text-3xl font-black text-slate-300 group-hover:text-[#172B45] transition-colors font-mono">
                  {step.stepNumber}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-bold text-[#172B45] group-hover:text-[#F28C28] transition-colors leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Pill */}
              <div className="mt-5 pt-3 border-t border-slate-200/80">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">
                  Phase Output:
                </span>
                <span className="text-xs font-medium text-[#172B45]">
                  {step.deliverables}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Process Guarantee Footer */}
        <div className="mt-12 p-6 bg-[#F4F6F8] border border-[#E2E8F0] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-700">
            <strong className="text-[#172B45]">Need express prototype machining?</strong> We offer
            rapid turnarounds for critical industrial machine breakdown jobs.
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#172B45] hover:bg-[#263D57] text-white text-xs uppercase font-bold tracking-wider py-2.5 px-5 rounded-sm transition-colors shrink-0"
          >
            <span>Request Fast-Track Production</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F28C28]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
