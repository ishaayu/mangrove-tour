"use client";

import Image from "next/image";

export default function Home() {
  const whatsappNumber = "60136054160"; // your WhatsApp number

  return (
    <main className="font-sans relative">
      {/* HERO SECTION */}
      <section className="h-screen relative flex items-center justify-center">
        <Image
          src="/mangrove.jpg"
          alt="Mangrove Background"
          fill
          className="object-cover"
        />
        <div className="absolute bg-black/60 p-10 rounded-xl text-center text-white max-w-xl z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Mangrove Eco Tour</h1>
          <p className="text-lg md:text-xl mb-6">
            Explore nature. Protect the future. Experience unforgettable mangrove adventures.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%20Mangrove%20Tour,%20I%20want%20to%20book%20a%20tour!`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 px-8 py-3 rounded-full shadow hover:bg-green-700 text-lg font-semibold flex items-center justify-center gap-2 mx-auto transition-transform transform hover:scale-105"
          >
            <Image
              src="/test1.png"
              alt="WhatsApp"
              width={50}
              height={50}
              unoptimized
            />
            Book via WhatsApp
          </a>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Our Mangrove Tour</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Experience the beauty of mangrove forests with our professional guides.
            Our eco-friendly tours are perfect for families, photographers, and nature lovers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Enjoy eco-adventures, discover local wildlife, and capture stunning moments
            in pristine nature. Our tours are designed to inspire and educate while
            protecting the environment.
          </p>
        </div>
        <div className="md:w-1/2 relative w-full h-80 md:h-96">
          <Image
            src="/mockup.jpg"
            alt="Mangrove Tour Mockup"
            fill
            className="rounded-xl shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="bg-green-50 py-16 px-6 relative">
        <h2 className="text-3xl font-bold text-center mb-10">Pakej Mangrove Tour</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Package
            title="Pakej A"
            price="RM250"
            whatsappNumber={whatsappNumber}
            features={["Bat Cave", "Fish Farm", "Eagle Feeding", "Mangrove Sightseeing"]}
          />
          <Package
            title="Pakej B"
            price="RM350"
            whatsappNumber={whatsappNumber}
            features={[
              "Bat Cave",
              "Fish Farm",
              "Eagle Feeding",
              "Mangrove Sightseeing",
              "Crocodile Cave",
              "Andaman Sea",
              "Icon Kilim Geoforest Park",
            ]}
          />
          <Package
            title="Pakej C"
            price="RM400"
            whatsappNumber={whatsappNumber}
            features={[
              "Bat Cave",
              "Fish Farm",
              "Eagle Feeding",
              "Mangrove Sightseeing",
              "Crocodile Cave",
              "Andaman Sea",
              "Icon Kilim Geoforest Park",
              "Swimming at Island Beach",
            ]}
          />
          <Package
            title="Pakej D"
            price="RM450"
            whatsappNumber={whatsappNumber}
            features={[
              "Bat Cave",
              "Fish Farm",
              "Eagle Feeding",
              "Mangrove Sightseeing",
              "Crocodile Cave",
              "Andaman Sea",
              "Icon Kilim Geoforest Park",
              "Swimming at Island Beach",
              "Snorkelling @ Fish Feeding at Dangli Island",
            ]}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        © {new Date().getFullYear()} Mangrove Eco Tour. All rights reserved.
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi%20Mangrove%20Tour,%20I%20want%20to%20book%20a%20tour!`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 p-4 rounded-full shadow-lg flex items-center justify-center z-50 transition-transform transform hover:scale-125 hover:rotate-6"
      >
        <Image
          src="/test1.png"
          alt="WhatsApp"
          width={50}
          height={50}
    
        />
      </a>
    </main>
  );
}

function Package({
  title,
  price,
  whatsappNumber,
  features,
}: {
  title: string;
  price: string;
  whatsappNumber: string;
  features: string[];
}) {
  const waLink = `https://wa.me/${whatsappNumber}?text=Hi%20Mangrove%20Tour,%20I%20want%20to%20book%20${encodeURIComponent(
    title
  )}!`;

  return (
    <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-2xl font-semibold mb-4">{price}</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-center mt-4 transition-transform transform hover:scale-105"
      >
        Book via WhatsApp
      </a>
    </div>
  );
}