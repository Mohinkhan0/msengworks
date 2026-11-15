import React from "react";
import { COMPANY_CONFIG, SERVICES_DATA } from "../data/companyData";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${COMPANY_CONFIG.canonicalUrl}#organization`,
        "name": COMPANY_CONFIG.name,
        "alternateName": COMPANY_CONFIG.shortName,
        "description":
          "Professional industrial manufacturing and precision engineering company specializing in lathe machine work (Kharad work), needle loom machine manufacturing, spare parts, custom die making, drilling, grinding, and industrial machine repair.",
        "url": COMPANY_CONFIG.canonicalUrl,
        "telephone": COMPANY_CONFIG.phoneRaw,
        "email": COMPANY_CONFIG.email,
        "priceRange": "$$",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": COMPANY_CONFIG.address.street,
          "addressLocality": COMPANY_CONFIG.address.city,
          "addressRegion": COMPANY_CONFIG.address.state,
          "postalCode": COMPANY_CONFIG.address.postalCode,
          "addressCountry": COMPANY_CONFIG.address.country,
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "18:00",
          },
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Industrial Engineering & Manufacturing Services",
          "itemListElement": SERVICES_DATA.map((service, index) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.title,
              "description": service.shortDescription,
              "url": `${COMPANY_CONFIG.canonicalUrl}/#services`,
            },
            "position": index + 1,
          })),
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": COMPANY_CONFIG.phoneRaw,
            "contactType": "sales",
            "areaServed": ["IN", "Worldwide"],
            "availableLanguage": ["English", "Hindi", "Gujarati"],
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
