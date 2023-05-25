import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "next/link";
import { useState } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import TipTapEditor from "~/components/TipTapEditor";
import { type NextPageWithLayout } from "~/pages/_app";

const CreateJournalEntryPage: NextPageWithLayout = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [titleInputValue, setTitleInputValue] = useState("");
  const [tempContent, setTempContent] = useState("");

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
          "-mx-4 prose bg-base-100/40 dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl p-4 pt-6 focus:outline-none",
      },
    },
    content: tempContent,
    editable: true,
    onUpdate: ({ editor }) => {
      setTempContent?.(editor.getHTML());
    },
  });

  return (
    <>
      <section className="mb-2">
        <Link
          className="pr-1 underline-offset-2 hover:underline"
          href="/journal"
        >
          Journal
        </Link>
        &gt;
        <span className="px-1">Create New Entry</span>
      </section>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative col-span-12 -mx-0 flex flex-col rounded"
      >
        <div className="-mx-4 grid grid-cols-2 gap-1 bg-base-900 p-2">
          <button
            type="button"
            className="col-span-1 rounded border border-accent-200 bg-base-400/20 p-2 text-accent-200 transition hover:bg-base-400/30 active:bg-base-400/40"
          >
            Save Draft
          </button>
          <button
            onClick={() => console.log(tempContent)}
            type="button"
            className="col-span-1 rounded bg-accent-200 p-2 text-primary-800 transition hover:bg-accent-300 active:bg-accent-400"
          >
            Submit Entry
          </button>
        </div>
        <TipTapEditor
          editor={editor}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          content={tempContent}
          setTempContent={setTempContent}
          titleInputValue={titleInputValue}
          setTitleInputValue={setTitleInputValue}
          isEditable={true}
        />
      </form>
    </>
  );
};

CreateJournalEntryPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default CreateJournalEntryPage;
