import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Package, ArrowRight, Check, Send } from "lucide-react";
import { PRODUCTS_DATA } from "../data/companyData";

export default function Products() {
  return (
    <section
      id="products"
      aria-label="Industrial Products Catalog"
      className="py-16 md:py-24 bg-[#F4F6F8] text-[#252B33] border-t border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#172B45] text-white text-xs font-bold tracking-widest uppercase">
            <Package className="w-3.5 h-3.5 text-[#F28C28]" />
            <span>Product Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B45] tracking-tight">
            Engineered Products &amp; Precision Components
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From complete narrow fabric needle loom machinery to high-durability spare parts,
            precision shafts, and custom stamping dies built to exacting industry specifications.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-sm border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-800">
                <Image
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B45]/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#172B45]/90 text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm border border-slate-600/50">
                  {product.category}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#172B45] group-hover:text-[#F28C28] transition-colors leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Technical Specifications */}
                <div className="space-y-1.5 border-t border-slate-100 pt-3">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#172B45] block">
                    Key Specifications:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {product.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#F28C28] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enquiry Button */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`#contact`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#172B45] hover:bg-[#F28C28] text-white text-sm font-semibold py-2.5 px-4 rounded-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                    aria-label={`Enquire about ${product.title}`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Product Enquiry</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Notice */}
        <div className="mt-12 text-center p-6 bg-white border border-[#E2E8F0] rounded-sm">
          <p className="text-sm text-slate-600">
            Need a custom specification or obsolete spare part reproduced?{" "}
            <Link
              href="#contact"
              className="text-[#172B45] font-bold underline hover:text-[#F28C28] transition-colors ml-1"
            >
              Contact our technical team for custom dimensional fabrication.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
