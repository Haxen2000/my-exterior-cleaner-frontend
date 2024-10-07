import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RichTextProps {
  data: {
    content: string;
    body: string;
  };
}

export default function RichText({ data }: RichTextProps) {
  // TODO: STYLE THE MARKDOWN
  return (
    <section className="rich-text py-6 px-6 md:px-20">
      <Markdown children={data.content || data.body} remarkPlugins={[remarkGfm]} />
    </section>
  );
}
