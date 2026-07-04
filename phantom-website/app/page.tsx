'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import ScrollCanvas from '@/components/ScrollCanvas';
import ScrollOverlay from '@/components/ScrollOverlay';
import ProductDetails from '@/components/ProductDetails';
import TechSpecs from '@/components/TechSpecs';
import BuySection from '@/components/BuySection';
import { products } from '@/data/products';

export default function Home() {
  const product = products[0];
  const [frameCount, setFrameCount] = useState(70);

  useEffect(() => {
    // Attempt to determine actual frame count from the images folder
    // Using 70 frames from extracted animation
    setFrameCount(70);
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Scroll Animation Section */}
      <div className="relative" style={{ height: '500vh' }}>
        {/* Sticky Canvas */}
        <ScrollCanvas frameCount={frameCount} folderPath={product.folderPath} />

        {/* Text Overlays during scroll */}
        <ScrollOverlay
          overlayTexts={product.overlayText}
          totalFrames={frameCount}
        />
      </div>

      {/* Product Details Section */}
      <ProductDetails features={product.features} />

      {/* Tech Specs Section */}
      <TechSpecs stats={product.stats} />

      {/* Buy Section */}
      <BuySection
        price={product.price}
        switchOptions={product.switchOptions}
      />
    </main>
  );
}
