"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { COMPANY_CONFIG } from "../data/companyData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Lathe Machining", href: "#slide-1" },
    { name: "Needle Loom OEM", href: "#slide-2" },
    { name: "Tool & Die Works", href: "#slide-3" },
    { name: "Contact & Factory", href: "#contact-footer" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: "#103b64",
        borderBottom: "1px solid #1e456d",
        boxShadow: "0 4px 12px rgba(11, 31, 54, 0.2)",
      }}
    >
      {/* Top Bar */}
      <div
        className="top-bar-desktop"
        style={{
          backgroundColor: "#0b1f36",
          color: "#cbd5e1",
          borderBottom: "1px solid #1e456d",
          fontSize: "0.75rem",
          padding: "0.5rem 1rem",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                color: "#cbd5e1",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              aria-label={`Call us at ${COMPANY_CONFIG.phoneDisplay}`}
            >
              <Phone style={{ width: 14, height: 14, color: "#38a8f5" }} />
              <span style={{ fontWeight: 600 }}>{COMPANY_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href={`tel:${COMPANY_CONFIG.secondaryPhoneRaw}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                color: "#cbd5e1",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              aria-label={`Call us at ${COMPANY_CONFIG.secondaryPhone}`}
            >
              <Phone style={{ width: 14, height: 14, color: "#38a8f5" }} />
              <span style={{ fontWeight: 600 }}>{COMPANY_CONFIG.secondaryPhone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_CONFIG.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                color: "#cbd5e1",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              aria-label={`Email us at ${COMPANY_CONFIG.email}`}
            >
              <Mail style={{ width: 14, height: 14, color: "#38a8f5" }} />
              <span>{COMPANY_CONFIG.email}</span>
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                color: "#38a8f5",
                fontWeight: 600,
                fontSize: "0.6875rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              <ShieldCheck style={{ width: 14, height: 14, color: "#38a8f5" }} />
              <span>ISO Standard &bull; Direct B2B Workshop</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div
        className="header-main-bar"
        style={{
          height: 72,
          display: "flex",
          alignItems: "center",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand Logo */}
          <Link
            href="#hero"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none",
              minWidth: 0,
            }}
          >
            <div
              className="header-logo-container"
              style={{
                position: "relative",
                height: 52,
                width: 52,
                borderRadius: 6,
                overflow: "hidden",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                flexShrink: 0,
              }}
            >
              <Image
                src="/img/logo.jpg"
                alt="Company Logo"
                width={52}
                height={52}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
                priority
              />
            </div>

          </Link>

          {/* Navigation Links */}
          <nav className="desktop-nav-menu">
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{
                      color: "#e2e8f0",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      padding: "0.5rem 0.875rem",
                      borderRadius: 2,
                      textDecoration: "none",
                      display: "block",
                      transition: "all 0.2s",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quote Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                COMPANY_CONFIG.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="header-quote-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                backgroundColor: "#1e7fd4",
                color: "#ffffff",
                fontSize: "0.875rem",
                fontWeight: 600,
                padding: "0.625rem 1.25rem",
                borderRadius: 4,
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(30, 127, 212, 0.35)",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              <FileText style={{ width: 14, height: 14 }} />
              <span>Get a Quote</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              style={{
                alignItems: "center",
                justifyContent: "center",
                color: "#e2e8f0",
                padding: "0.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            >
              {mobileMenuOpen ? (
                <X style={{ width: 24, height: 24 }} />
              ) : (
                <Menu style={{ width: 24, height: 24 }} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Left Drawer & Backdrop */}
      {/* Backdrop Overlay */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          zIndex: 90,
          opacity: mobileMenuOpen ? 1 : 0,
          visibility: mobileMenuOpen ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
        }}
        aria-hidden="true"
      />

      {/* Left Slide-in Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          width: 290,
          maxWidth: "85vw",
          backgroundColor: "#0b1f36",
          borderRight: "1px solid #1e456d",
          boxShadow: mobileMenuOpen ? "6px 0 24px rgba(0, 0, 0, 0.6)" : "none",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          overflowY: "auto",
        }}
      >
        {/* Top Section */}
        <div>
          <div
            style={{
              padding: "1rem 1.25rem",
              borderBottom: "1px solid #1e456d",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#103b64",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  position: "relative",
                  width: 38,
                  height: 38,
                  backgroundColor: "#ffffff",
                  borderRadius: 6,
                  overflow: "hidden",
                  padding: 2,
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/img/logo.jpg"
                  alt="MS Engineering Works"
                  width={38}
                  height={38}
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#ffffff", fontSize: "0.875rem", fontWeight: 800, textTransform: "uppercase" }}>
                  MS Engineering
                </span>
                <span style={{ color: "#38a8f5", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.05em" }}>
                  Works
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              style={{
                color: "#e2e8f0",
                padding: "0.35rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                borderRadius: 4,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "none",
              }}
            >
              <X style={{ width: 20, height: 20 }} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav style={{ padding: "0.75rem 0.5rem" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.75rem 1rem",
                      color: "#e2e8f0",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      borderRadius: 4,
                      transition: "background-color 0.2s, color 0.2s",
                    }}
                  >
                    <span>{link.name}</span>
                    <ChevronRight style={{ width: 16, height: 16, color: "#38a8f5" }} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Contact Info in Drawer */}
        <div
          style={{
            padding: "1.25rem",
            borderTop: "1px solid #1e456d",
            backgroundColor: "#081729",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              backgroundColor: "#1e7fd4",
              color: "#ffffff",
              padding: "0.65rem 1rem",
              borderRadius: 4,
              fontSize: "0.85rem",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <Phone style={{ width: 16, height: 16 }} />
            <span>Call: {COMPANY_CONFIG.phoneDisplay}</span>
          </a>

          <a
            href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              COMPANY_CONFIG.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              backgroundColor: "#103b64",
              border: "1px solid #1e7fd4",
              color: "#ffffff",
              padding: "0.6rem 1rem",
              borderRadius: 4,
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </div>
    </header>
  );
}
