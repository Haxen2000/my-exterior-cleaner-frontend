"use client";
import { Fade } from "react-slideshow-image";
import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";

interface Image {
  id: number;
  attributes: {
    alternativeText: string | null;
    caption: string | null;
    url: string;
  };
}

interface SlidShowProps {
  files: {
    data: Image[];
  };
}

export default function Slideshow({ data }: { data: SlidShowProps }) {
  console.log('Slideshow', data);
  return (
    <div className="slide-container max-w-4xl m-auto">
      <Fade>
        {data.files.data.map((fadeImage: Image, index) => {
          const imageUrl = getStrapiMedia(fadeImage.attributes.url);
          return (
            <div key={index}>
              {imageUrl && <Image className="w-full max-w-2xl m-auto object-cover rounded-lg" height={400} width={600} alt="alt text" src={imageUrl} />}
            </div>
          );
        })}
      </Fade>
    </div>
  );
}
