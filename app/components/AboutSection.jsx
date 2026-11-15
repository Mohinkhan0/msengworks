"use client";

import React from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ShieldCheck,
  PhoneCall,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { COMPANY_CONFIG } from "../data/companyData";

export default function AboutSection() {
  const highlights = [
    "Micro-Tolerance Kharad Turning (±0.01 mm)",
    "High-Speed Needle Loom OEM & Spare Parts",
    "Custom Tool & Die Making (D2 / HCHCr Hardened)",
    "Direct Workshop Pricing & Fast Drawing SLA",
  ];

  return (
    <section
      id="about"
      aria-label="About MS Engineering Works"
      style={{
        backgroundColor: "#ffffff",
        color: "#1e293b",
        padding: "5rem 1.5rem",
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="about-grid">
          {/* Left Column: Image with Badge */}
          <div className="about-image-col" style={{ position: "relative" }}>
            <div
              className="about-image-container"
              style={{
                position: "relative",
                width: "100%",
                height: 530,
                borderRadius: 8,
                overflow: "hidden",
                boxShadow: "0 12px 32px rgba(16, 59, 100, 0.15)",
                border: "2px solid #103b64",
                backgroundColor: "#0b1f36",
              }}
            >
              <Image
                src="/img/kharad.jpg"
                alt="MS Engineering Works Industrial Lathe Machine Workshop"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              {/* Gradient Accent on Bottom */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 65%, rgba(11, 31, 54, 0.75) 100%)",
                }}
              />
            </div>

            {/* Floating Experience Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-1.25rem",
                right: "1rem",
                backgroundColor: "#103b64",
                color: "#ffffff",
                padding: "1rem 1.5rem",
                borderRadius: 6,
                boxShadow: "0 6px 20px rgba(16, 59, 100, 0.35)",
                border: "2px solid #38a8f5",
                display: "flex",
                alignItems: "center",
                gap: "0.875rem",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  color: "#38a8f5",
                  fontFamily: "var(--font-mono), monospace",
                }}
              >
                20+
              </div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Years Of Industrial
                <br />
                Machining Excellence
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="about-text-col" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Tag Badge */}


            {/* Main Heading */}
            <h2
              style={{
                color: "#0b1f36",
                fontSize: "clamp(1.65rem, 3.2vw, 2.35rem)",
                fontWeight: 900,
                lineHeight: 1.2,
                letterSpacing: "-0.015em",
                margin: 0,
              }}
            >
              About {" "}
              <span style={{ color: "#1e7fd4" }}>us </span>
            </h2>

            {/* Tagline */}
            <p
              style={{
                color: "#103b64",
                fontWeight: 700,
                fontSize: "1rem",
                margin: 0,
              }}
            >
              Precision Engineering & Machinery Solutions Built on Trust
            </p>

            {/* Paragraph Text */}
            <p
              style={{
                color: "#475569",
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              <strong>MS Engineering Works</strong> is a specialized precision manufacturing and machining workshop located in Modinagar, Uttar Pradesh. We bring over a decade of hands-on expertise in heavy center <strong>Lathe Machine Work (Kharad Turning)</strong>, high-speed <strong>Narrow Fabric Needle Loom Machines &amp; Spares</strong>, and custom <strong>Tool &amp; Die Manufacturing</strong>.
            </p>

            <p
              style={{
                color: "#475569",
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Equipped with heavy-duty center lathes, radial drilling setups, surface grinding, and certified fabrication, our workshop delivers micro-tolerances down to ±0.01 mm for industrial shafts, rollers, custom gears, and stamping press tooling.
            </p>

            {/* Key Capabilities List */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "0.75rem",
                paddingTop: "0.5rem",
              }}
            >
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#1e293b",
                  }}
                >
                  <CheckCircle2 style={{ width: 17, height: 17, color: "#1e7fd4", flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1rem",
                paddingTop: "1rem",
              }}
            >
              <a
                href="#contact-footer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#103b64",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  padding: "0.75rem 1.6rem",
                  borderRadius: 4,
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(16, 59, 100, 0.3)",
                  transition: "background-color 0.2s",
                }}
              >
                <span>Visit Factory &amp; Contact</span>
                <ArrowRight style={{ width: 16, height: 16 }} />
              </a>

              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#ffffff",
                  color: "#103b64",
                  border: "1.5px solid #103b64",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  padding: "0.75rem 1.4rem",
                  borderRadius: 4,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                <PhoneCall style={{ width: 16, height: 16, color: "#1e7fd4" }} />
                <span>{COMPANY_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
