'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Add debug logging
  console.log('Trying to load images from paths:', images);

  const openModal = (img: string) => {
    console.log('Opening image:', img);
    setSelectedImage(img);
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => {
          // Verify each image path
          const fullPath = `${process.env.NEXT_PUBLIC_BASE_URL || ''}${src}`;
          console.log(`Image ${index}:`, fullPath);

          return (
            <div 
              key={index} 
              className="relative aspect-square cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openModal(src)}
            >
              <Image
                src={src}
                fill
                alt={`Gallery image ${index + 1}`}
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 50vw, 25vw"
                onError={(e) => {
                  console.error('Failed to load image:', src, e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Dialog Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
      >
        <Dialog.Panel className="relative w-full h-full max-h-[90vh] max-w-[90vw]">
          {selectedImage && (
            <>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={selectedImage}
                  fill
                  alt="Enlarged view"
                  className="object-contain"
                  priority
                  quality={100}
                  sizes="100vw"
                  onError={(e) => {
                    console.error('Failed to load enlarged image:', selectedImage, e);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white bg-gray-800/80 hover:bg-gray-700/90 rounded-full p-2 backdrop-blur-sm"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </>
          )}
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}