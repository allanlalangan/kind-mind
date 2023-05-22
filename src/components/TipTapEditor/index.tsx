import { api } from "~/utils/api";
import TipTapMenuBar from "../TipTapMenuBar";

import styles from "./styles.module.css";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

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
          "prose bg-base-100/40 dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl p-4 pt-6 focus:outline-none",
      },
    },
    content: content || "",
    editable: isEditable || true,
  });

  useEffect(() => {
    editor?.setEditable(Boolean(isEditable));
  }, [editor, isEditable]);

  const createNewEntry = api.entries.createEntry.useMutation({
    onSuccess: () => {
      void console.log("createEntry success");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNewEntry.mutate({
      title: titleInputValue || "Untitled",
      content: editor?.options.content as string,
    });
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative col-span-12 -mx-4 flex flex-col rounded"
    >
      {isEditable && (
        <>
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
        </>
      )}

      <EditorContent className={styles.ProseMirror} editor={editor} />
    </form>
  );
}
