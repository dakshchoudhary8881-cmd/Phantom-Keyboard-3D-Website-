'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollCanvasProps {
  frameCount: number;
  folderPath: string;
}

export default function ScrollCanvas({ frameCount, folderPath }: ScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load all frame images
  useEffect(() => {
    const loadFrames = async () => {
      const images: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = `${folderPath}/${String(i).padStart(3, '0')}.webp`;
        
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
            imagesRef.current = images;
            setIsLoaded(true);
            drawFrame(0);
          }
        };

        img.onerror = () => {
          // Fallback: try jpg format
          const fallbackImg = new Image();
          fallbackImg.src = `${folderPath}/${String(i).padStart(3, '0')}.jpg`;
          fallbackImg.onload = () => {
            loadedCount++;
            if (loadedCount === frameCount) {
              imagesRef.current = images;
              setIsLoaded(true);
              drawFrame(0);
            }
          };
          images[i] = fallbackImg;
        };

        images[i] = img;
      }
    };

    loadFrames();
  }, [frameCount, folderPath]);

  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesRef.current[frameIndex]) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;

    ctx.drawImage(img, 0, 0);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (!isLoaded) return;

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollProgress = scrollTop / scrollHeight;

      const frameIndex = Math.min(
        Math.floor(scrollProgress * (frameCount - 1)),
        frameCount - 1
      );

      setCurrentFrame(frameIndex);
      drawFrame(frameIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoaded, frameCount]);

  return (
    <div className="sticky top-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-phantom-dark/80">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-phantom-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-phantom-cyan">Loading animation frames...</p>
          </div>
        </div>
      )}
    </div>
  );
}
