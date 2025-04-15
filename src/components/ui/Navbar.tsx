// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Concerts', href: '/concerts' },
    { name: 'About Levi', href: '/about' },
    { name: 'Booking', href: '/booking' },
    { name: 'Contact', href: '/contact' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-purple-700">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - hidden on mobile */}
          <div className="flex-shrink-0 md:block hidden">
            <Link href="/">
              <span className="text-xl font-bold text-indigo-600">Levi Schechtmann</span>
            </Link>
          </div>

          {/* Mobile menu button - centered */}
          <div className="flex-1 flex justify-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Logo - visible only on mobile when menu is closed */}
          {!mobileMenuOpen && (
            <div className="flex-shrink-0 md:hidden absolute left-4">
              <Link href="/">
                <span className="text-xl font-bold text-indigo-600">Levi Schechtmann</span>
              </Link>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1">
            <div className="flex justify-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === link.href
                      ? 'bg-purple-100 text-indigo-700'
                      : 'text-white-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Empty div to balance flex layout on desktop */}
          <div className="hidden md:block flex-shrink-0 w-24"></div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-3">
            <div className="space-y-1 px-2 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === link.href
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}