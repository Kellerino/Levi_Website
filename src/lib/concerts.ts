export interface Concert {
    id: string;
    date: Date;
    title: string;
    venue: string;
    location: string;
    ticketUrl: string;
    description?: string;
    imageUrl?: string;
  }
  
  export const upcomingConcerts: Concert[] = [
    {
      id: "1",
      date: new Date("2024-09-15"),
      title: "Moonlight Sonata Tour",
      venue: "Royal Concert Hall",
      location: "London, UK",
      ticketUrl: "#",
      description: "An evening of Beethoven's most famous piano works",
      imageUrl: "/concert-1.jpg"
    },
    {
      id: "2",
      date: new Date("2024-10-22"),
      title: "Chopin Nocturnes",
      venue: "Symphony Space",
      location: "New York, NY",
      ticketUrl: "#",
      description: "Complete Nocturnes performed in one sitting"
    },
    // Add more concerts...
  ];