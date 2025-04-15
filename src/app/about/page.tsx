import Image from 'next/image';

export default function Contact() {
    return(
<div className="py-16 bg-transparent">  
  <div className="container m-auto px-6 text-white-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <Image 
                        src="/public/gallery/FIB01307.jpg"
                        width={400}
                        height={1}
                        className="object-cover"
                        alt="Levis Pic"
                      />
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-purple-900 font-bold md:text-4xl">Levi Schechtmann</h2>
          <p className="mt-6 text-white-600">Levi Schechtmann, born in 1999, is a German pianist renowned for blending classical music with modern genres like hip-hop, creating a unique fusion that has captured a global audience. He began piano lessons at age seven and has since developed a reputation as an innovative performer. Levi is active on platforms like Instagram and TikTok, where he has gained nearly 600.000 followers in total, showcasing his reinterpretations of classical pieces by composers such as Bach, Liszt, and Chopin, but also his own arrangements and improvisations.

            Schechtmanns approach involves merging classical styles with elements of modern genres like hip-hop and house, a combination that has earned him numerous accolades. He has won awards at prestigious competitions, including the Steinway Competition and Hamburg Instrumental Competition, and has performed at renowned venues like Elbphilharmonie and Laeiszhalle in Hamburg and Flagey in Belgium. His popularity is driven by his ability to bridge musical genres, making classical music accessible and appealing to younger audiences through a modern, rhythm-heavy style.</p>
          
          
          <p className="mt-4 text-white-600">Levi Schechtmann, geboren 1999, ist ein deutscher Pianist, der dafür bekannt ist, klassische Musik mit modernen Genres wie Hip-Hop zu kombinieren und so eine einzigartige Fusion zu schaffen, die ein weltweites Publikum begeistert. Er begann im Alter von sieben Jahren mit dem Klavierspielen und hat sich seither einen Ruf als innovativer Künstler aufgebaut. Levi ist auf Plattformen wie Instagram und TikTok aktiv, wo er insgesamt fast 600.000 Follower gewonnen hat, indem er seine Neuinterpretationen klassischer Werke von Komponisten wie Bach, Liszt und Chopin sowie seine eigenen Arrangements und Improvisationen präsentiert.

Schechtmanns Ansatz umfasst das Verschmelzen klassischer Stile mit Elementen moderner Genres wie Hip-Hop und House – eine Kombination, die ihm zahlreiche Auszeichnungen eingebracht hat. Er hat Preise bei renommierten Wettbewerben wie dem Steinway-Wettbewerb und dem Hamburger Instrumental-Wettbewerb gewonnen und in bekannten Veranstaltungsorten wie der Elbphilharmonie und Laeiszhalle in Hamburg sowie Flagey in Belgien gespielt. Seine Popularität beruht darauf, dass er musikalische Genres miteinander verbindet und so klassische Musik durch einen modernen, rhythmusbetonten Stil für jüngere Zuhörer zugänglich und ansprechend macht.</p>
        </div>
      </div>
  </div>
</div>
    )
}