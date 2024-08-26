import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RichTextProps {
  data: {
    content: string;
  };
}

export default function RichText({ data }: RichTextProps) {
  // TODO: STYLE THE MARKDOWN
  console.log('[RichText]')
  return (
    <section className="rich-text py-6 px-20">
      <Markdown children={data.content} remarkPlugins={[remarkGfm]} />
    </section>
  );
}
