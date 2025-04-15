import GalleryComponent from '@/components/ui/Gallery'

export default function Gallery() {

  const images : string[] = [
    "/../gallery/FIB00413.jpg",
    "/gallery/FIB00413.jpg",
    "/gallery/FIB00464.jpg",
    "/gallery/FIB00479.jpg",
    "/gallery/FIB00527.jpg",
    "/gallery/FIB00548.jpg",
    "/gallery/FIB00664.jpg",
    "/gallery/FIB00726.jpg",
    "/gallery/FIB00752.jpg",
    "/gallery/FIB00873.jpg",
    "/gallery/FIB01105.jpg",


  ]

  return (
    <main>
    <h1 className="text-3xl font-bold text-center my-8">Photo Gallery</h1>
    <GalleryComponent images={images} />
  </main>
  )
}