import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ContactProps {
  data: {
    id: string;
    body: string;
  };
}

export default function Contact ({ data }: ContactProps) {
  return (
    <section className="bg-white text-black contact">
      <div className="container flex flex-col justify-center p-6 mx-auto lg:flex-row">
        <div className="flex flex-col justify-center text-center rounded-lg lg:max-w-md xl:max-w-5xl lg:text-left">
          <Markdown children={data.body} remarkPlugins={[remarkGfm]} components={{
                a: props => {
                    return props.href?.startsWith('tel/') ? (
                        // <CustomTwitterComponent url={props.href} /> // Render Twitter links with custom component
                        <a href={props.href.replace('tel/', 'tel:')}>{props.children}</a>
                    ) : (
                        <a href={props.href}>{props.children}</a> // All other links
                    )
                }
            }} />
        </div>
      </div>
    </section>
  );
}
