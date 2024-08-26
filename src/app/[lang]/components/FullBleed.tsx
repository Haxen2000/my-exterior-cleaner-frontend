import HighlightedText from "./HighlightedText";

interface FullBleedProps {
  data: {
    id: string;
    title: string;
    body: string;
  };
}

export default function FullBleed({ data }: FullBleedProps) {
  return (
    <section className="text-white full-bleed">
      <div className='top lines'></div>
      <div className="container flex flex-col justify-center p-6 mx-auto lg:flex-row">
        <div className="flex flex-col justify-center text-center rounded-lg lg:max-w-md xl:max-w-5xl lg:text-left">
          <HighlightedText
            text={data.title}
            tag="h1"
            className="text-5xl font-bold leading-none sm:text-6xl mb-8"
            color="dark:text-violet-400"
          />

          <HighlightedText
            text={data.body}
            tag="p"
            className="mt-6 mb-8 text-lg sm:mb-12"
            color="dark:text-violet-400"
          />
        </div>
      </div>
      <div className='bottom lines'></div>
    </section>
  );
}
