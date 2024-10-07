import { getStrapiMedia } from "../utils/api-helpers";

interface VideoBlockProps {
  video: { data: { attributes: VideoProps } }
  width?: string;
  height?: string;
  autoplay: boolean;
  muted: boolean;
  loop: boolean;
}
interface VideoProps {
  id: number;
  url: string;
  mime: string;
}


export default function LargeVideo({ data }: { data: VideoBlockProps }) {
  const vidData = data.video.data.attributes
  const videoUrl = getStrapiMedia(
    vidData?.url
  );

  return (
    <div className="flex justify-center">
      <video
        width={data.width || "100%"}
        height={data.height || "100%"}
        controls
        autoPlay={data.autoplay}
        muted={data.muted}
        loop={data.loop}
        className="video-player relative pb-56.25 h-72 lg:h-[450px] overflow-hidden my-8"
      >
        <source src={videoUrl || ""} type={vidData.mime || ""} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
