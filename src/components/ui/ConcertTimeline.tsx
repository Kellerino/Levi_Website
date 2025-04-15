// components/ConcertTimeline.tsx
'use client';

import Image from 'next/image';
import { upcomingConcerts } from '../../lib/concerts';
import Link from 'next/link';

export default function ConcertTimeline() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Upcoming Concerts
      </h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent md:left-1/2"></div>
        
        {upcomingConcerts.map((concert, index) => (
          <div 
            key={concert.id} 
            className={`relative mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 h-4 w-4 rounded-full bg-indigo-600 border-4 border-white z-10 md:left-1/2 md:transform md:-translate-x-2"></div>
            
            {/* Concert card */}
            <div className={`ml-10 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
              <div className="bg-[#ddcaeb] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                {concert.imageUrl && (
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={concert.imageUrl}
                      fill
                      alt={concert.title}
                      className="object-cover"
                    />
                  </div>
                )}
                
                <div className="flex items-center mb-2">
                  {/* <CalendarIcon className="h-5 w-5 text-indigo-500 mr-2" /> */}
                  <span className="font-semibold text-gray-700">
                    {(concert.date, 'MMMM d, yyyy')}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{concert.title}</h3>
                <div className="flex items-center mb-3 text-gray-600">
                  {/* <LocationMarkerIcon className="h-5 w-5 mr-2" /> */}
                  <span>{concert.venue}, {concert.location}</span>
                </div>
                
                {concert.description && (
                  <p className="text-gray-600 mb-4">{concert.description}</p>
                )}
                
                <Link
                  href={concert.ticketUrl}
                  className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Get Tickets
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
