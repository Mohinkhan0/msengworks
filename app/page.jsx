import React from "react";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      {/* 1. Header Navigation */}
      <Header />

      {/* 2. Hero 3-Image Banner Carousel & About Section */}
      <main style={{ flex: 1 }}>
        <HeroCarousel />
        <AboutSection />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
