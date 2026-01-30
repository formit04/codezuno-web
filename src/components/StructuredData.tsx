export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Codezuno",
    "url": "https://codezuno.com",
    "logo": "https://codezuno.com/logo.png",
    "description": "Professional software development company specializing in custom web applications, mobile apps, AI solutions, and cloud services.",
    "email": "hello@codezuno.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Warsaw",
      "addressCountry": "PL"
    },
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@codezuno.com",
      "availableLanguage": ["English", "Polish", "Spanish"]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Codezuno",
    "image": "https://codezuno.com/logo.png",
    "url": "https://codezuno.com",
    "email": "hello@codezuno.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Warsaw",
      "addressCountry": "Poland"
    },
    "priceRange": "€€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 52.2297,
        "longitude": 21.0122
      },
      "geoRadius": "10000"
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Worldwide"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Software Development Services",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Web Development",
        "description": "Custom web applications built with modern frameworks like React, Next.js, and Vue.js.",
        "provider": { "@type": "Organization", "name": "Codezuno" },
        "serviceType": "Web Development"
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Mobile Development",
        "description": "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
        "provider": { "@type": "Organization", "name": "Codezuno" },
        "serviceType": "Mobile App Development"
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "AI Solutions",
        "description": "AI chatbots, process automation, document processing, and custom AI model development.",
        "provider": { "@type": "Organization", "name": "Codezuno" },
        "serviceType": "Artificial Intelligence"
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Cloud Solutions",
        "description": "Cloud infrastructure design and deployment on AWS, GCP, and Azure.",
        "provider": { "@type": "Organization", "name": "Codezuno" },
        "serviceType": "Cloud Computing"
      },
      {
        "@type": "Service",
        "position": 5,
        "name": "API Development",
        "description": "Scalable backend systems and RESTful APIs for web and mobile applications.",
        "provider": { "@type": "Organization", "name": "Codezuno" },
        "serviceType": "API Development"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Codezuno",
    "url": "https://codezuno.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://codezuno.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": ["en", "pl", "es"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
