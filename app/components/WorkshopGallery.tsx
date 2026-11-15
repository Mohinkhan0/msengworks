"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, Eye, X, ZoomIn } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "../data/companyData";

export default function WorkshopGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: "all", label: "All Operations" },
    { id: "lathe", label: "Lathe Machining" },
    { id: "needle-loom", label: "Needle Loom" },
    { id: "spare-parts", label: "Spare Parts & Dies" },
    { id: "fabrication", label: "Welding & Workshop" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section
      id="gallery"
      aria-label="Workshop and Machining Gallery"
      className="py-16 md:py-24 bg-[#F4F6F8] text-[#252B33] border-t border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#172B45] text-white text-xs font-bold tracking-widest uppercase">
            <Camera className="w-3.5 h-3.5 text-[#F28C28]" />
            <span>Facility Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B45] tracking-tight">
            Our Manufacturing Workshop &amp; Machining Gallery
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Take a visual tour inside our active manufacturing shop floor, displaying lathe
            operations, needle loom assembly, tooling dies, and specialized mechanical fabrication.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-sm transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-[#172B45] text-white shadow-md border border-[#172B45]"
                  : "bg-white text-slate-600 hover:text-[#172B45] hover:bg-slate-100 border border-[#E2E8F0]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-72 rounded-sm overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl cursor-pointer bg-slate-900 transition-all duration-300"
            >
              <Image
                src={item.imageUrl}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500 brightness-95"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#172B45] via-[#172B45]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 bg-[#172B45]/80 p-2 rounded-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-[#F28C28]" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#F28C28] font-bold">
                  {item.categoryLabel}
                </span>
                <h3 className="text-base font-bold leading-tight group-hover:text-slate-100">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-[#172B45] border border-slate-700 rounded-sm max-w-4xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-[#F28C28] text-white p-2 rounded-sm transition-colors cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[320px] sm:h-[480px] w-full bg-black">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="p-6 text-white space-y-2 bg-[#172B45]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#F28C28] font-bold">
                    {selectedImage.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400">Workshop Operational Asset</span>
                </div>
                <h4 className="text-xl font-bold">{selectedImage.title}</h4>
                <p className="text-sm text-slate-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
