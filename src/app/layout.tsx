import type {Metadata, Viewport} from 'next';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import Script from 'next/script';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#A67B5B',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cocohodokaty.com'),
  title: {
    default: 'Cocohodo Katy | Best Coffee, Desserts, Crepes & Dubai Chocolate in Katy, TX',
    template: '%s | Cocohodo Katy',
  },
  description:
    'Cocohodo Katy is a modern cafe in Katy, Texas serving coffee and drinks, breakfast, sweet desserts, savory crepes, sandwiches, shaved ice (bingsu), waffles, and viral Dubai Chocolate creations. Open 7 days a week. Order online via Clover, DoorDash, or Uber Eats. Free Wi-Fi, study-friendly atmosphere.',
  keywords: [
    'cafe katy tx',
    'coffee shop katy',
    'dessert bar katy',
    'crepes katy texas',
    'dubai chocolate katy',
    'dubai chocolate houston',
    'bingsu shaved ice katy',
    'best coffee katy',
    'breakfast katy tx',
    'study spot katy',
    'wifi cafe katy',
    'cocohodo',
    'cocohodo katy',
    'waffles katy tx',
    'smoothies katy',
    'affogato katy',
    'nutella latte',
    'honey lavender latte',
    'matcha latte katy',
    'cinco ranch coffee',
    'fulshear cafe',
    'west houston coffee shop',
  ],
  authors: [{name: 'Cocohodo Katy'}],
  creator: 'Cocohodo Katy',
  publisher: 'Cocohodo Katy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.cocohodokaty.com',
    siteName: 'Cocohodo Katy',
    title: 'Cocohodo Katy | Best Coffee, Desserts, Crepes & Dubai Chocolate in Katy, TX',
    description:
      'A welcoming cafe in Katy, TX built around variety, comfort, and community. Coffee and drinks, breakfast, sweet desserts, savory crepes, sandwiches, bingsu, waffles, and viral Dubai Chocolate. Order online or visit us!',
    images: [
      {
        url: 'https://static.wixstatic.com/media/c5947c_edd0d476732c440f859177b133acdec8~mv2.jpg',
        width: 1200,
        height: 630,
        alt: 'Cocohodo Katy cafe interior and signature desserts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cocohodo Katy | Best Coffee, Desserts & Crepes in Katy, TX',
    description:
      'Coffee and drinks, breakfast, handcrafted desserts, savory crepes, and viral Dubai Chocolate in Katy, Texas. Order online or visit us today!',
    images: ['https://static.wixstatic.com/media/c5947c_edd0d476732c440f859177b133acdec8~mv2.jpg'],
  },
  alternates: {
    canonical: 'https://www.cocohodokaty.com',
  },
  icons: {
    icon: 'https://static.wixstatic.com/media/c5947c_8cfb0ad6973445e3aea4f437c94e314f~mv2.png',
    shortcut: 'https://static.wixstatic.com/media/c5947c_8cfb0ad6973445e3aea4f437c94e314f~mv2.png',
    apple: 'https://static.wixstatic.com/media/c5947c_8cfb0ad6973445e3aea4f437c94e314f~mv2.png',
  },
  other: {
    'msapplication-TileImage': 'https://static.wixstatic.com/media/c5947c_8cfb0ad6973445e3aea4f437c94e314f~mv2.png',
    'msapplication-TileColor': '#A67B5B',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Cocohodo Katy',
  image: [
    'https://static.wixstatic.com/media/c5947c_edd0d476732c440f859177b133acdec8~mv2.jpg',
    'https://static.wixstatic.com/media/c5947c_8cfb0ad6973445e3aea4f437c94e314f~mv2.png',
  ],
  '@id': 'https://www.cocohodokaty.com',
  url: 'https://www.cocohodokaty.com',
  telephone: '+1-832-321-5849',
  priceRange: '$$',
  servesCuisine: ['Coffee Shop', 'Cafe', 'Dessert Bar', 'American', 'Breakfast', 'Brunch'],
  acceptsReservations: 'False',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1645 Winding Hollow Dr #201',
    addressLocality: 'Katy',
    addressRegion: 'TX',
    postalCode: '77450',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.7549904,
    longitude: -95.7524284,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '08:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '08:00',
      closes: '21:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '4',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: {'@type': 'Person', name: 'Alexandra M.'},
      datePublished: '2025-05-13',
      reviewBody:
        "An absolute gem in Katy! The desserts are a must-try, and the vibe is so refreshing. It's my new favorite spot.",
      reviewRating: {'@type': 'Rating', ratingValue: '5', bestRating: '5'},
    },
    {
      '@type': 'Review',
      author: {'@type': 'Person', name: 'David L.'},
      datePublished: '2025-04-27',
      reviewBody:
        'The coffee is top-notch, smooth and flavorful. What really sets this place apart is the bright, clean atmosphere. Perfect for getting work done.',
      reviewRating: {'@type': 'Rating', ratingValue: '5', bestRating: '5'},
    },
    {
      '@type': 'Review',
      author: {'@type': 'Person', name: 'Brian C.'},
      datePublished: '2025-05-20',
      reviewBody:
        'Finally, a coffee shop with real character! The attention to detail in the decor and the menu is incredible. The crepes are dangerously good.',
      reviewRating: {'@type': 'Rating', ratingValue: '5', bestRating: '5'},
    },
    {
      '@type': 'Review',
      author: {'@type': 'Person', name: 'Jennifer K.'},
      datePublished: '2025-05-23',
      reviewBody:
        'Best desserts in Katy! The Dubai chocolate crepes are amazing. Great place to relax or catch up with friends.',
      reviewRating: {'@type': 'Rating', ratingValue: '5', bestRating: '5'},
    },
  ],
  potentialAction: [
    {
      '@type': 'OrderAction',
      target: [
        {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.clover.com/online-ordering/cocohodo-katy-3',
          actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
        },
      ],
      deliveryMethod: 'http://schema.org/OnDemandDelivery',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'OrderAction',
      target: [
        {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.order.store/store/cocohodo-katy/tKj58KewQVC4v4YqlPogHg',
          actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
        },
      ],
      deliveryMethod: 'http://schema.org/OnDemandDelivery',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'OrderAction',
      target: [
        {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.doordash.com/store/cocohodo-katy-788983/53002750/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJjb2NvaG9kbyBjb2ZmZWUgc2hvcCIsIml0ZW1faWRzIjpbXSwic2VhcmNoX3Rlcm0iOiJjb2NvIGhvZG8gY29mZmVlIHNob3AiLCJ2ZXJ0aWNhbF9pZCI6LTk5OSwidmVydGljYWxfbmFtZSI6ImFsbCJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzMsMTc1LDE5MywxOTVdfQ==&pickup=false',
          actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
        },
      ],
      deliveryMethod: 'http://schema.org/OnDemandDelivery',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
    },
  ],
  hasMenu: 'https://shorturl.at/JQiu4',
  sameAs: [
    'https://www.instagram.com/cocohodokatytx/',
    'https://facebook.com/cocohodokatytx',
    'https://www.tiktok.com/@cocohodokaty',
  ],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cocohodo Katy',
  url: 'https://www.cocohodokaty.com',
  logo: 'https://static.wixstatic.com/media/c5947c_8cfb0ad6973445e3aea4f437c94e314f~mv2.png',
  sameAs: [
    'https://www.instagram.com/cocohodokatytx/',
    'https://facebook.com/cocohodokatytx',
    'https://www.tiktok.com/@cocohodokaty',
    'https://www.clover.com/online-ordering/cocohodo-katy-3',
    'https://www.order.store/store/cocohodo-katy/tKj58KewQVC4v4YqlPogHg',
    'https://www.doordash.com/store/cocohodo-katy-788983/53002750/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-832-321-5849',
    contactType: 'Customer Service',
    areaServed: 'US-TX',
    availableLanguage: ['English', 'Spanish'],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Cocohodo Katy',
  url: 'https://www.cocohodokaty.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.cocohodokaty.com/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.cocohodokaty.com',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts — Cormorant Garamond (premium serif, closest free alternative to The Seasons) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16828747729"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16828747729');`,
          }}
        />
      </head>
      <body className="antialiased">
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(localBusinessSchema)}}
        />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(organizationSchema)}}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(websiteSchema)}}
        />
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
