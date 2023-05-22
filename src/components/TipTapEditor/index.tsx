import { api } from "~/utils/api";
import TipTapMenuBar from "../TipTapMenuBar";

import styles from "./styles.module.css";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";

type TipTapEditorProps = {
  content?: string;
  isEditable?: boolean;
  titleInputValue?: string;
  setTitleInputValue: (value: string) => void;
};

export default function TipTapEditor({
  content,
  isEditable,
  titleInputValue,
  setTitleInputValue,
}: TipTapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose bg-base-100/40 dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl p-4 pt-6 -mt-2 focus:outline-none",
      },
    },
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: flex;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
    `,
  });

  const [titleInputValue, setTitleInputValue] = useState("");
  const createNewEntry = api.entries.createEntry.useMutation({
    onSuccess: () => {
      void console.log("createEntry success");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNewEntry.mutate({
      title: titleInputValue,
      content: editor?.options.content as string,
    });
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative col-span-12 -mx-4 flex flex-col rounded"
    >
      <div className="right-2 top-2 z-20 grid grid-cols-2 gap-1 bg-base-900 p-2 md:absolute">
        <button
          type="button"
          className="col-span-1 rounded border border-accent-200 bg-base-400/20 p-2 text-accent-200 transition hover:bg-base-400/30 active:bg-base-400/40"
        >
          Save Draft
        </button>
        <button
          type="submit"
          className="col-span-1 rounded bg-accent-200 p-2 text-primary-800 transition hover:bg-accent-300 active:bg-accent-400"
        >
          Submit Entry
        </button>
      </div>
      <section className="z-10 bg-base-900 pb-2 shadow-md md:pt-2">
        <div className="">
          <input
            onChange={(e) => setTitleInputValue(e.target.value)}
            value={titleInputValue}
            className="w-full rounded-t bg-transparent p-4 text-4xl font-semibold text-primary-500 placeholder:font-semibold placeholder:text-primary-500/75"
            placeholder="Entry Title..."
            type="text"
            name="title"
            id="title"
          />
          <TipTapMenuBar editor={editor} />
        </div>
      </section>
      <EditorContent className={styles.ProseMirror} editor={editor} />
      {/* <EditorContent className={styles.ProseMirror} editor={editor} /> */}
    </form>
  );
}
