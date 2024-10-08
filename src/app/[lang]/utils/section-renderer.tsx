import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Email from "../components/Email";
import RichText from "../components/RichText";
import FullBleed from "../components/FullBleed";
import Basic from "../components/Basic";
import Contact from "../components/Contact";
import ImageSlider from "../components/ImageSlider";
import LargeVideo from "../components/LargeVideo";

export function sectionRenderer(section: any, index: number) {
  // console.log('[sectionRenderer]', section.__component)
  switch (section.__component) {
    case "sections.hero":
      return <Hero key={index} data={section} />;
    case "sections.features":
      return <Features key={index} data={section} />;
    case "sections.testimonials-group":
      return <Testimonials key={index} data={section} />;
    case "sections.pricing":
      return <Pricing key={index} data={section} />;
    case "sections.lead-form":
      return <Email key={index} data={section} />;
    case "sections.rich-text":
      return <RichText key={index} data={section} />;
    case "sections.full-bleed":
      return <FullBleed key={index} data={section} />;
    case "sections.basic":
      return <Basic key={index} data={section} />;
    case "sections.contact":
      return <Contact key={index} data={section} />;
    case "sections.large-video":
      return <LargeVideo key={index} data={section} />;
    case "shared.slider":
      return <ImageSlider key={index} data={section} />;
    default:
      return null;
  }
}
