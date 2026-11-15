"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_CONFIG } from "../data/companyData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Lathe Machine Work (Kharad Work)",
    details: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Phone, and Email).");
      return;
    }

    setStatus("submitting");

    // Simulate reliable client submission with clear feedback
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "Lathe Machine Work (Kharad Work)",
        details: "",
      });
    }, 700);
  };

  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_CONFIG.whatsappMessage
  )}`;

  return (
    <section
      id="contact"
      aria-label="Contact Us and Request a Quote"
      className="py-16 md:py-24 bg-white text-[#252B33]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#172B45] text-white text-xs font-bold tracking-widest uppercase">
            <Mail className="w-3.5 h-3.5 text-[#F28C28]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B45] tracking-tight">
            Request an Industrial Quote &amp; Consultation
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Have a custom requirement, mechanical drawing, or need urgent machine spare parts?
            Fill out the form below or connect directly with our technical engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#172B45] text-white p-8 rounded-sm shadow-xl space-y-6 border border-[#263D57]">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#F28C28]">
                  Plant &amp; Sales Office
                </span>
                <h3 className="text-xl font-bold mt-1 text-white">
                  {COMPANY_CONFIG.name}
                </h3>
              </div>

              {/* Address Placeholder */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-[#263D57]">
                <div className="p-2.5 bg-[#263D57] rounded-sm text-[#F28C28] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <strong className="block text-slate-200">Factory / Workshop Address:</strong>
                  <p className="text-slate-300 leading-relaxed mt-0.5">
                    {COMPANY_CONFIG.address.fullAddress}
                  </p>
                </div>
              </div>

              {/* Phone Placeholder */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-[#263D57]">
                <div className="p-2.5 bg-[#263D57] rounded-sm text-[#F28C28] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <strong className="block text-slate-200">Phone Numbers:</strong>
                  <p className="text-slate-300 mt-0.5">
                    <a
                      href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                      className="hover:text-[#F28C28] transition-colors"
                    >
                      {COMPANY_CONFIG.phoneDisplay}
                    </a>{" "}
                    /{" "}
                    <a
                      href={`tel:${COMPANY_CONFIG.secondaryPhone.replace(/\s+/g, "")}`}
                      className="hover:text-[#F28C28] transition-colors"
                    >
                      {COMPANY_CONFIG.secondaryPhone}
                    </a>
                  </p>
                </div>
              </div>

              {/* Email Placeholder */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-[#263D57]">
                <div className="p-2.5 bg-[#263D57] rounded-sm text-[#F28C28] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <strong className="block text-slate-200">Official Email:</strong>
                  <p className="text-slate-300 mt-0.5">
                    <a
                      href={`mailto:${COMPANY_CONFIG.email}`}
                      className="hover:text-[#F28C28] transition-colors"
                    >
                      {COMPANY_CONFIG.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* WhatsApp Placeholder */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-[#263D57]">
                <div className="p-2.5 bg-[#25D366] text-white rounded-sm shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <strong className="block text-slate-200">Instant WhatsApp Support:</strong>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 hover:text-white transition-colors underline block mt-0.5"
                  >
                    Chat Directly on +91 {COMPANY_CONFIG.whatsappNumber.slice(2)}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-[#263D57]">
                <div className="p-2.5 bg-[#263D57] rounded-sm text-[#F28C28] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <strong className="block text-slate-200">Operating Hours:</strong>
                  <p className="text-slate-300 mt-0.5">{COMPANY_CONFIG.workingHours}</p>
                </div>
              </div>
            </div>

            {/* Trust Assurance Badge */}
            <div className="p-5 bg-[#F4F6F8] rounded-sm border border-[#E2E8F0] flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#172B45] shrink-0" />
              <div className="text-xs text-slate-600">
                <strong className="text-[#172B45] block font-semibold">Strict Privacy &amp; Non-Disclosure:</strong>
                Your drawings, CAD files, and technical specifications are protected under strict B2B confidentiality.
              </div>
            </div>
          </div>

          {/* Right Column: Complete Quotation Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F4F6F8] p-8 sm:p-10 rounded-sm border border-[#E2E8F0] shadow-md">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#172B45]">
                    Request a Custom Quotation
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    We typically respond within 2 to 4 business hours.
                  </p>
                </div>
                <FileText className="w-6 h-6 text-[#F28C28]" />
              </div>

              {status === "success" && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">Thank You for Your Enquiry!</h4>
                    <p className="text-xs mt-0.5">
                      Your manufacturing requirement has been submitted. Our engineering team will
                      review the details and reach out to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-300 text-red-800 rounded-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-xs font-semibold">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#172B45] uppercase tracking-wider mb-1.5">
                      Your Full Name / Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Patel / Apex Textiles"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#172B45] text-slate-800"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#172B45] uppercase tracking-wider mb-1.5">
                      Phone / Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#172B45] text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#172B45] uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. contact@yourcompany.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#172B45] text-slate-800"
                    />
                  </div>

                  {/* Service Required */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-[#172B45] uppercase tracking-wider mb-1.5">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#172B45] text-slate-800"
                    >
                      <option value="Lathe Machine Work (Kharad Work)">Lathe Machine Work (Kharad Work)</option>
                      <option value="Needle Loom Machine Manufacturing">Needle Loom Machine Manufacturing</option>
                      <option value="Needle Loom Spare Parts Manufacturing">Needle Loom Spare Parts Manufacturing</option>
                      <option value="Custom Die Manufacturing">Custom Die Manufacturing</option>
                      <option value="Drilling Machine Work">Drilling Machine Work</option>
                      <option value="Grinding Work">Grinding Work</option>
                      <option value="Welding and Fabrication">Welding and Fabrication</option>
                      <option value="Needle Loom Machine Repairing">Needle Loom Machine Repairing</option>
                      <option value="Industrial Machine Maintenance">Industrial Machine Maintenance</option>
                      <option value="Custom Industrial Job Work">Custom Industrial Job Work</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="details" className="block text-xs font-bold text-[#172B45] uppercase tracking-wider mb-1.5">
                    Project Details, Material Specs &amp; Quantity
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Describe your dimensions, material grades (e.g. EN8, SS304), quantity, machine model, or required tolerances..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#172B45] text-slate-800 resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#F28C28] hover:bg-[#d97718] disabled:opacity-75 text-white font-bold py-3.5 px-6 rounded-sm shadow-md transition-all hover:translate-y-[-1px] text-base cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
                  >
                    <Send className="w-5 h-5" />
                    <span>{status === "submitting" ? "Submitting Enquiry..." : "Submit Enquiry"}</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  By submitting, you agree to receive technical communication and quotations from our team.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
