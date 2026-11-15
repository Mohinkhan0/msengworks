"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  PhoneCall,
  MessageSquare,
} from "lucide-react";
import { COMPANY_CONFIG } from "../data/companyData";

const slides = [
  {
    id: 1,
    anchorId: "slide-1",
    tag: "HEAVY INDUSTRIAL MACHINING & KHARAD WORK",
    title: "Precision Lathe Machine Work &",
    highlight: "Custom Kharad Turning",
    subtitle:
      "High-precision turning, facing, boring, and threading on heavy-duty center lathe machines. Diameters up to 600 mm and lengths up to 4000 mm held to micro-tolerances (±0.01 mm) for shafts, rollers, bushes, and flanges.",
    imageUrl: "/img/kharad.jpg",
    imageAlt: "MS Engineering Works Heavy duty lathe machine and precision custom kharad turning work",
    specs: ["Tolerances: ±0.01 mm", "EN8, EN19, EN31, SS304 & MS", "Single Job Work to Bulk Runs"],
    primaryBtnText: "Request Lathe Job Work Quote",
    primaryBtnHref: `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello, I need a quotation for Lathe Machine Work / Kharad Job Work.")}`,
    secondaryBtnText: "Call Shop Floor Engineer",
    secondaryBtnHref: `tel:${COMPANY_CONFIG.phoneRaw}`,
  },
  {
    id: 2,
    anchorId: "slide-2",
    tag: "TEXTILE MACHINERY OEM & REPAIRING",
    title: "High-Speed Needle Loom Machine",
    highlight: "Manufacturing & Spares",
    subtitle:
      "Design and manufacturing of heavy-duty narrow fabric needle looms for elastic tape, satin ribbon, and industrial webbing. Complete inventory of pattern chains, weft needles, shed cams, and genuine replacement spare parts.",
    imageUrl: "/img/loom.png",
    imageAlt: "MS Engineering Works High speed narrow fabric needle loom machine operating in manufacturing unit",
    specs: ["Speeds: Up to 1200+ RPM", "Rigid Cast Iron Frame", "100% Interchangeable Spares"],
    primaryBtnText: "Inquire Loom Machinery",
    primaryBtnHref: `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello, I want to inquire about Needle Loom Machines & Spare Parts.")}`,
    secondaryBtnText: "Call Machinery Specialist",
    secondaryBtnHref: `tel:${COMPANY_CONFIG.phoneRaw}`,
  },
  {
    id: 3,
    anchorId: "slide-3",
    tag: "PRECISION TOOLING, FABRICATION & DIES",
    title: "Custom Tool & Die Manufacturing,",
    highlight: "Drilling & Heavy Welding",
    subtitle:
      "Specialized manufacturing of press tools, blanking dies, and progressive stamping tooling using hardened D2/D3/HCHCr steel. Multi-spindle radial drilling, cylindrical grinding, and certified structural MIG/TIG welding fabrication.",
    imageUrl: "/img/die.jpg",
    imageAlt: "MS Engineering Works Custom Tool and Die Manufacturing, Stamping Tooling & Heavy Welding",
    specs: ["HCHCr / D2 Hardened (58-62 HRC)", "Micron Surface Grinding", "Certified MIG/TIG Welders"],
    primaryBtnText: "Submit Drawing for Quote",
    primaryBtnHref: `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello, I want to share a CAD drawing for Die Manufacturing & Tooling Quote.")}`,
    secondaryBtnText: "Call Tooling Specialist",
    secondaryBtnHref: `tel:${COMPANY_CONFIG.phoneRaw}`,
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      id="hero"
      aria-label="Industrial Manufacturing Hero Carousel"
      className="hero-section-mobile"
      style={{
        position: "relative",
        backgroundColor: "#0b1f36",
        color: "#ffffff",
        overflow: "hidden",
        userSelect: "none",
        minHeight: 480,
      }}
    >
      {/* Slides Container */}
      <div
        className="carousel-slides-wrapper"
        style={{
          position: "relative",
          minHeight: 480,
          display: "flex",
          alignItems: "center",
        }}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              id={slide.anchorId}
              style={{
                position: "absolute",
                inset: 0,
                opacity: isActive ? 1 : 0,
                visibility: isActive ? "visible" : "hidden",
                zIndex: isActive ? 10 : 0,
                transition: "opacity 0.7s ease-in-out, visibility 0.7s ease-in-out",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Slide Image Background */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={slide.imageUrl}
                  alt={slide.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "brightness(0.88) contrast(1.12) saturate(1.15)",
                    transform: isActive ? "scale(1)" : "scale(1.05)",
                    transition: "transform 1.2s ease-out",
                  }}
                />

                {/* Soft, Transparent Radial Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(90deg, rgba(11, 31, 54, 0.76) 0%, rgba(16, 59, 100, 0.45) 45%, rgba(11, 31, 54, 0.1) 100%)",
                  }}
                />

                {/* Soft Bottom Gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 75%, rgba(11, 31, 54, 0.5) 100%)",
                  }}
                />
              </div>

              {/* Slide Content */}
              <div
                className="carousel-content-container"
                style={{
                  position: "relative",
                  zIndex: 20,
                  width: "100%",
                  maxWidth: 1280,
                  margin: "0 auto",
                  padding: "2.5rem 1.5rem",
                }}
              >
                <div
                  style={{
                    maxWidth: 780,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {/* Badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      backgroundColor: "rgba(11, 31, 54, 0.88)",
                      border: "1px solid rgba(56, 168, 245, 0.4)",
                      padding: "0.3rem 0.75rem",
                      borderRadius: 4,
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      color: "#e2e8f0",
                      width: "fit-content",
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        backgroundColor: "#38a8f5",
                      }}
                    />
                    <span>{slide.tag}</span>
                  </div>

                  {/* Heading */}
                  {index === 0 ? (
                    <h1
                      className="carousel-heading-mobile"
                      style={{
                        fontSize: "clamp(1.35rem, 2.8vw, 2.15rem)",
                        fontWeight: 900,
                        lineHeight: 1.18,
                        letterSpacing: "-0.015em",
                        color: "#ffffff",
                        textShadow:
                          "0 2px 12px rgba(0, 0, 0, 0.9), 0 1px 4px rgba(0, 0, 0, 0.95)",
                        margin: 0,
                      }}
                    >
                      {slide.title}{" "}
                      <span
                        style={{
                          color: "#38a8f5",
                          display: "inline",
                          textShadow: "0 2px 12px rgba(0, 0, 0, 0.9)",
                        }}
                      >
                        {slide.highlight}
                      </span>
                    </h1>
                  ) : (
                    <h2
                      className="carousel-heading-mobile"
                      style={{
                        fontSize: "clamp(1.35rem, 2.8vw, 2.15rem)",
                        fontWeight: 900,
                        lineHeight: 1.18,
                        letterSpacing: "-0.015em",
                        color: "#ffffff",
                        textShadow:
                          "0 2px 12px rgba(0, 0, 0, 0.9), 0 1px 4px rgba(0, 0, 0, 0.95)",
                        margin: 0,
                      }}
                    >
                      {slide.title}{" "}
                      <span
                        style={{
                          color: "#38a8f5",
                          display: "inline",
                          textShadow: "0 2px 12px rgba(0, 0, 0, 0.9)",
                        }}
                      >
                        {slide.highlight}
                      </span>
                    </h2>
                  )}

                  {/* Description */}
                  <p
                    className="carousel-paragraph-mobile"
                    style={{
                      fontSize: "clamp(0.875rem, 1.8vw, 1.05rem)",
                      color: "#f8fafc",
                      lineHeight: 1.55,
                      maxWidth: 680,
                      fontWeight: 500,
                      textShadow: "0 1px 8px rgba(0, 0, 0, 0.9)",
                      margin: 0,
                    }}
                  >
                    {slide.subtitle}
                  </p>

                  {/* Specs Chips */}
                  <div
                    className="carousel-specs-row"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "0.5rem",
                      paddingTop: "0.25rem",
                    }}
                  >
                    {slide.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="carousel-spec-chip"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.375rem",
                          backgroundColor: "rgba(11, 31, 54, 0.75)",
                          border: "1px solid rgba(56, 168, 245, 0.25)",
                          padding: "0.35rem 0.7rem",
                          borderRadius: 4,
                          fontFamily: "var(--font-mono), monospace",
                          fontSize: "0.75rem",
                          color: "#e2e8f0",
                        }}
                      >
                        <CheckCircle2 style={{ width: 14, height: 14, color: "#38a8f5" }} />
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>

                  {/* Contact Us Button */}
                  <div
                    className="carousel-btn-group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "0.5rem",
                    }}
                  >
                    <a
                      href="#contact-footer"
                      className="carousel-btn-mobile"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        backgroundColor: "#1e7fd4",
                        color: "#ffffff",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        padding: "0.75rem 1.6rem",
                        borderRadius: 4,
                        textDecoration: "none",
                        boxShadow: "0 4px 14px rgba(30, 127, 212, 0.4)",
                        transition: "all 0.2s",
                      }}
                    >
                      <PhoneCall style={{ width: 17, height: 17, color: "#ffffff" }} />
                      <span>Contact Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
