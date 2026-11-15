"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ArrowUp,
  Clock,
} from "lucide-react";
import { COMPANY_CONFIG } from "../data/companyData";

function LinkedInIcon({ style }) {
  return (
    <svg style={style} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 0 0 0-3.18 1.59 1.59 0 0 0 0 3.18m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

function TwitterIcon({ style }) {
  return (
    <svg style={style} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ style }) {
  return (
    <svg style={style} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function YoutubeIcon({ style }) {
  return (
    <svg style={style} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      id="contact-footer"
      style={{
        backgroundColor: "#0b1f36",
        color: "#cbd5e1",
        borderTop: "1px solid #1e456d",
        paddingTop: "4rem",
        paddingBottom: "2.5rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Column 1: Company Profile */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  position: "relative",
                  width: 115,
                  height: 115,
                  backgroundColor: "#ffffff",
                  borderRadius: 8,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 6,
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.35)",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/img/logo.jpg"
                  alt="MS Engineering Works Logo"
                  width={115}
                  height={115}
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "1.2rem",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  MS Engineering Works
                </span>
                <span
                  style={{
                    color: "#38a8f5",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Building Solutions. Engineering Trust.
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.8125rem", color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>
              Precision lathe machine work (Kharad work), narrow fabric needle loom manufacturing,
              genuine loom spare parts, stamping dies, and industrial machine overhauling services.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", paddingTop: "0.5rem" }}>
              {[
                { icon: <LinkedInIcon style={{ width: 16, height: 16 }} />, label: "LinkedIn" },
                { icon: <TwitterIcon style={{ width: 16, height: 16 }} />, label: "Twitter" },
                { icon: <FacebookIcon style={{ width: 16, height: 16 }} />, label: "Facebook" },
                { icon: <YoutubeIcon style={{ width: 16, height: 16 }} />, label: "YouTube" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href="#hero"
                  aria-label={item.label}
                  style={{
                    width: 36,
                    height: 36,
                    backgroundColor: "#103b64",
                    border: "1px solid #1e456d",
                    color: "#cbd5e1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 4,
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4
              style={{
                color: "#ffffff",
                fontSize: "0.875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                paddingBottom: "0.625rem",
                borderBottom: "1px solid #1e456d",
                margin: 0,
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                { name: "Home", href: "#hero" },
                { name: "About Us", href: "#about" },
                { name: "Lathe Kharad Machining", href: "#slide-1" },
                { name: "Needle Loom Machinery", href: "#slide-2" },
                { name: "Tool & Die Manufacturing", href: "#slide-3" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      fontSize: "0.8125rem",
                      color: "#cbd5e1",
                      textDecoration: "none",
                    }}
                  >
                    <ChevronRight style={{ width: 12, height: 12, color: "#38a8f5" }} />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Workshop Specs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4
              style={{
                color: "#ffffff",
                fontSize: "0.875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                paddingBottom: "0.625rem",
                borderBottom: "1px solid #1e456d",
                margin: 0,
              }}
            >
              Key Capabilities
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                "Micro-Tolerance Turning (±0.01 mm)",
                "Swing up to 600mm / 4000mm Bed",
                "HCHCr & D2 Hardened Stamping Dies",
                "Certified MIG/TIG Fabrication",
              ].map((cap, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontSize: "0.8125rem",
                    color: "#cbd5e1",
                  }}
                >
                  <ChevronRight style={{ width: 12, height: 12, color: "#38a8f5" }} />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Factory Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4
              style={{
                color: "#ffffff",
                fontSize: "0.875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                paddingBottom: "0.625rem",
                borderBottom: "1px solid #1e456d",
                margin: 0,
              }}
            >
              Factory &amp; Inquiries
            </h4>
            <address style={{ fontStyle: "normal", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.8125rem", color: "#cbd5e1" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                <MapPin style={{ width: 16, height: 16, color: "#38a8f5", flexShrink: 0, marginTop: 2 }} />
                <span>{COMPANY_CONFIG.address.fullAddress}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <Clock style={{ width: 16, height: 16, color: "#38a8f5", flexShrink: 0 }} />
                <span>{COMPANY_CONFIG.workingHours}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <Phone style={{ width: 16, height: 16, color: "#38a8f5", flexShrink: 0 }} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} style={{ color: "#cbd5e1", textDecoration: "none", fontWeight: 600 }}>
                    {COMPANY_CONFIG.phoneDisplay}
                  </a>
                  <span>&bull;</span>
                  <a href={`tel:${COMPANY_CONFIG.secondaryPhoneRaw}`} style={{ color: "#cbd5e1", textDecoration: "none", fontWeight: 600 }}>
                    {COMPANY_CONFIG.secondaryPhone}
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <Mail style={{ width: 16, height: 16, color: "#38a8f5", flexShrink: 0 }} />
                <a href={`mailto:${COMPANY_CONFIG.email}`} style={{ color: "#cbd5e1", textDecoration: "none" }}>
                  {COMPANY_CONFIG.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            marginTop: "3.5rem",
            paddingTop: "1.75rem",
            borderTop: "1px solid #1e456d",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.75rem",
            color: "#64748b",
          }}
        >
          <div>
            &copy; {currentYear} {COMPANY_CONFIG.name}. All rights reserved. Precision Kharad &amp; Loom Engineering.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <a href="#hero" style={{ color: "#94a3b8", textDecoration: "none" }}>
              Privacy Policy
            </a>
            <a href="#hero" style={{ color: "#94a3b8", textDecoration: "none" }}>
              Terms of Supply
            </a>
            <a
              href="#hero"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25rem",
                color: "#38a8f5",
                textDecoration: "none",
              }}
            >
              <span>Back to Top</span>
              <ArrowUp style={{ width: 14, height: 14 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
