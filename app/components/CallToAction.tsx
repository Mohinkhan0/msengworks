import React from "react";
import Link from "next/link";
import { MessageSquare, FileText, ArrowRight, PhoneCall } from "lucide-react";
import { COMPANY_CONFIG } from "../data/companyData";

export default function CallToAction() {
  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_CONFIG.whatsappMessage
  )}`;

  return (
    <section
      aria-label="Call to Action"
      className="relative py-16 md:py-20 bg-[#172B45] text-white overflow-hidden border-t border-[#263D57]"
    >
      {/* Subtle industrial background pattern */}
      <div className="absolute inset-0 pattern-grid-dark opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#263D57] rounded-sm p-8 sm:p-12 border border-slate-700 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#172B45] text-[#F28C28] text-xs font-bold uppercase tracking-widest border border-slate-700">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Ready to Discuss Your Manufacturing Requirements?</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Looking for Reliable Industrial Manufacturing Solutions?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Contact our team for custom manufacturing, machine spare parts, lathe work and
                industrial repair services.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Same-Day Quotation on CAD Files
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Quick Dispatch for Loom Spares
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Direct Technical Engineer Consultation
                </span>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#F28C28] hover:bg-[#d97718] text-white font-semibold text-base px-6 py-3.5 rounded-sm shadow-lg shadow-orange-950/30 transition-all hover:translate-y-[-1px] text-center"
              >
                <FileText className="w-5 h-5" />
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-base px-6 py-3.5 rounded-sm shadow-md transition-all hover:translate-y-[-1px] text-center"
                aria-label="Chat with our engineering team on WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Contact on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
