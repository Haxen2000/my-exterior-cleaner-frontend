import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface HeroProps {
  data: {
    id: string;
    title: string;
    description: string;
    picture: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
    <section className="bg-white hero">
      <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24">
        <div className="flex flex-col justify-center py-6 md:px-6 text-center lg:max-w-xl xl:max-w-7xl border-b-4">
          <HighlightedText
            text={data.title}
            tag="h1"
            className="leading-none"
            color="dark:text-violet-400"
          />
        </div>
        <div className="flex items-center justify-center text-center md:text-left py-6 md:px-6 md:mt-8 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 flex-col md:flex-row gap-4">
          <HighlightedText
            text={data.description}
            tag="p"
            className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl"
            color="dark:text-violet-400"
          />
          <Image
            src={imgUrl || ""}
            alt={
              data.picture.data.attributes.alternativeText || "none provided"
            }
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            width={600}
            height={600}
          />
          {/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            {data.buttons.map((button: Button, index: number) => (
              <Link
                key={index}
                href={button.url}
                target={button.newTab ? "_blank" : "_self"}
                className={renderButtonStyle(button.type)}
              >
                {button.text}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
