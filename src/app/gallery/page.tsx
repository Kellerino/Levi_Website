import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Column 1 */}
        <div className="grid gap-4">
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB00413.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB00464.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid gap-4">
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB00479.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB00527.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
        </div>

        {/* Add more columns as needed */}
        <div className="grid gap-4">
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB00548.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB00664.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid gap-4">
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB00726.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB00752.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB00873.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB01105.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid gap-4">
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB00479.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB01245.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB01307.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid gap-4">
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB01361.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB01381.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
        </div><div className="grid gap-4">
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB01432.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB01459.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid gap-4">
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB01637.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB00527.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
        </div>
        <div className="grid gap-4">

          <div className="relative h-40 md:h-80">
            <Image
              src="/gallery/FIB09771.jpg"
              fill
              className="object-cover"
              alt="Levis Pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}