import HighlightedText from "./HighlightedText";

interface BasicProps {
  data: {
    id: string;
    title: string;
    body: string;
  };
}

export default function Basic({ data }: BasicProps) {
  return (
    <section className="bg-white text-black basic">
      <div className="container flex flex-col justify-center p-6 mx-auto lg:flex-row">
        <div className="flex flex-col justify-center text-center rounded-lg lg:max-w-md xl:max-w-5xl lg:text-left">
          <HighlightedText
            text={data.title}
            tag="h1"
            className="text-xl md:text-3xl font-bold leading-none sm:text-4xl text-center bg-white"
            color="dark:text-violet-400"
          />
          <hr className='mb-3 md:mb-8 -mt-1 md:-mt-3 h-1 border-t-2 border-t-mec-light-blue' />

          <HighlightedText
            text={data.body}
            tag="p"
            className="my-3 md:my-6 text-md md:text-lg sm:mb-12"
            color="dark:text-violet-400"
          />
        </div>
      </div>
    </section>
  );
}
