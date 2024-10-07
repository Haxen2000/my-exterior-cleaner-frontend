import { getStrapiMedia } from "../utils/api-helpers";

interface VideoProps {
  id: number;
  url: string;
  width?: string;
  height?: string;
}

export default function LargeVideo({ data }: { data: VideoProps }) {
  const videoUrl = getStrapiMedia(
    data?.url
  );

  return (
    <video width={data.width || "100%"} height={data.height || "100%"} controls preload="none" className="video-player relative pb-56.25 h-72 lg:h-[450px] overflow-hidden my-8">
      <source src={videoUrl || ""} />
      Your browser does not support the video tag.
    </video>
  );
}
