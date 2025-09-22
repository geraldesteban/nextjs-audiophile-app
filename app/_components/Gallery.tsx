import Image from "next/image";
import GalleryOne from "@/app/_assets/Gallery/Headphones/image-gallery-1.jpg";
import GalleryTwo from "@/app/_assets/Gallery/Headphones/image-gallery-2.jpg";
import GalleryThree from "@/app/_assets/Gallery/Headphones/image-gallery-3.jpg";

function Gallery() {
  return (
    <div className="flex justify-between gap-10 px-32 max-xl:px-16 max-lg:px-10 max-lg:py-20 max-sm:py-10 mb-20 max-sm:flex-col">
      <div className="flex flex-col gap-10">
        <div className="relative">
          <Image
            src={GalleryOne}
            alt="Headphone"
            className="object-cover rounded-xl w-full"
          />
        </div>
        <div className="relative">
          <Image
            src={GalleryTwo}
            alt="Headphone"
            className="object-cover rounded-xl w-full"
          />
        </div>
      </div>
      <div className="relative">
        <Image
          src={GalleryThree}
          alt="Headphone"
          className="object-cover rounded-xl w-full h-full"
        />
      </div>
    </div>
  );
}

export default Gallery;
