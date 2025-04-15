'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';

export default function Gallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Debug: Log the first image's full URL
  if (typeof window !== 'undefined' && images.length > 0) {
    console.log('Image URL test:', new URL(images[0], window.location.origin).href);
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover rounded-lg cursor-pointer hover:opacity-90"
              sizes="(max-width: 768px) 50vw, 25vw"
              onClick={() => setSelectedImage(src)}
              onError={(e) => {
                console.error('Failed to load:', src);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      {selectedImage && (
        <Dialog
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <Dialog.Panel className="relative w-full h-full max-w-6xl">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain"
              priority
              quality={100}
              onError={(e) => {
                console.error('Failed to load enlarged:', selectedImage);
                e.currentTarget.style.display = 'none';
              }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-gray-800/80 hover:bg-gray-700/90 rounded-full p-2 backdrop-blur-sm"
            >
              ✕
            </button>
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
}