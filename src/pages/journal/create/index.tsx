import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import DialogModal from "~/components/DialogModal";
import TipTapEditor from "~/components/TipTapEditor";
import { type NextPageWithLayout } from "~/pages/_app";
import { api } from "~/utils/api";

const CreateJournalEntryPage: NextPageWithLayout = () => {
  const session = useSession();
  const router = useRouter();
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

  let createEntry;

  if (!session.data?.user) {
    createEntry = api.guestEntries.createEntry.useMutation({
      onSuccess: (data) => {
        console.log("createEntry success");
        void router.push("/journal");
      },
    });
  } else {
    createEntry = api.entries.createEntry.useMutation({
      onSuccess: (data) => {
        console.log("createEntry success");
        void router.push("/journal");
      },
    });
  }

  const { mutate } = createEntry;

  // const createEntry = api.entries.createEntry.useMutation({
  //   onSuccess: (data) => {
  //     console.log("createEntry success");
  //     void router.push("/journal");
  //   },
  // });

  const onSubmit = () => {
    if (editor?.isEmpty) {
      console.log("Editor is empty, please add some content");
    } else {
      console.log(tempContent);
      console.log(titleInputValue);
      mutate({
        content: tempContent,
        title: titleInputValue.trim() === "" ? "untitled" : titleInputValue,
      });
    }
  };

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
            onClick={onSubmit}
            type="button"
            className="col-span-2 rounded border border-accent-200 bg-base-100/25 p-2 text-accent-200 transition hover:bg-base-100/40 active:bg-accent-400"
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
      <DialogModal
        isOpen={modalIsOpen}
        handleClose={() => {
          setModalIsOpen(false);
        }}
      >
        <h3 className="p-4 text-base font-semibold leading-6 text-gray-900">
          Are you sure?
        </h3>
        <p className="p-8 text-sm text-gray-500">
          All unsaved changes will be lost
        </p>
        <div className="w-full bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-1/3"
          >
            Discard Changes
          </button>
          <button className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-3 sm:mt-0 sm:w-1/3">
            Save Changes
          </button>
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-1/3"
            onClick={() => setModalIsOpen(false)}
          >
            Continue Editing
          </button>
        </div>
      </DialogModal>
    </>
  );
};

CreateJournalEntryPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default CreateJournalEntryPage;
