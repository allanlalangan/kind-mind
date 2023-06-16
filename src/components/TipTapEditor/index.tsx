import { api } from "~/utils/api";
import TipTapMenuBar from "../TipTapMenuBar";

import styles from "./styles.module.css";
import { type Editor, EditorContent } from "@tiptap/react";
import { useEffect } from "react";

type TipTapEditorProps = {
  editor: Editor | null;
  refetchEntry?: () => void;
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
  content?: string;
  tempContent?: string;
  setTempContent?: (value: string) => void;
  isEditable?: boolean;
  setIsEditable?: (value: boolean) => void;
  titleInputValue?: string;
  setTitleInputValue: (value: string) => void;
};

export default function TipTapEditor({
  editor,
  isEditable,
  titleInputValue,
  setTitleInputValue,
}: TipTapEditorProps) {
  useEffect(() => {
    editor?.setEditable(Boolean(isEditable));
  }, [editor, isEditable]);
  return (
    <>
      {isEditable && (
        <section className="-mx-4 bg-base-900 pb-2 shadow-md md:pt-2">
          <div className="">
            <input
              onChange={(e) => setTitleInputValue(e.target.value)}
              value={titleInputValue}
              className="w-full rounded-t bg-transparent p-4 text-4xl font-semibold text-primary-500 outline-none placeholder:font-semibold placeholder:text-primary-500/50"
              placeholder="Entry Title..."
              type="text"
              name="title"
              id="title"
            />

            <TipTapMenuBar editor={editor} />
          </div>
        </section>
      )}

      <EditorContent className={styles.ProseMirror} editor={editor} />
    </>
  );
}
