import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import DialogModal from "~/components/DialogModal";
import LoadingSpinner from "~/components/LoadingSpinner";
import TipTapEditor from "~/components/TipTapEditor";
import { type NextPageWithLayout } from "~/pages/_app";
import { api } from "~/utils/api";

const JournalEntryPage: NextPageWithLayout = () => {
  const session = useSession();
  const router = useRouter();
  const { id } = router.query;

  const [isEditable, setIsEditable] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // check to see if directed to edit mode route then set isEditable state
  useEffect(() => {
    if (router.query.edit !== undefined) {
      setIsEditable(true);
    } else {
      setIsEditable(false);
    }
  }, [router.query]);

  const [titleInputValue, setTitleInputValue] = useState("");
  const [content, setContent] = useState<string | null>(null);
  const [tempContent, setTempContent] = useState(content);

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
    content: content,
    editable: isEditable,
    onUpdate: ({ editor }) => {
      setTempContent?.(editor.getHTML());
    },
  });

  let getEntryQuery;
  let updateEntry;

  if (!session.data?.user) {
    getEntryQuery = api.guestEntries.getEntry.useQuery(
      { id: id as string },
      {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
          console.log("public getEntry success");
          if (!!data) {
            editor?.commands.setContent(data.content);
            setContent(data.content);
            setTempContent(data.content);
            setTitleInputValue(data.title);
          }
        },
      }
    );

    updateEntry = api.guestEntries.updateEntry.useMutation({
      onSuccess: (data) => {
        console.log(data);
        void refetch();
        console.log("public updateEntry success");
      },
    });
  } else {
    getEntryQuery = api.entries.getEntry.useQuery(
      { id: id as string },
      {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
          console.log("getEntry success");
          if (!!data) {
            editor?.commands.setContent(data.content);
            setContent(data.content);
            setTempContent(data.content);
            setTitleInputValue(data.title);
          }
        },
      }
    );

    updateEntry = api.entries.updateEntry.useMutation({
      onSuccess: (data) => {
        console.log(data);
        void refetch();
        console.log("updateEntry success");
      },
    });
  }
  const { data: journalEntry, isLoading, refetch } = getEntryQuery;
  const { mutate } = updateEntry;

  const handleSave = () => {
    setModalIsOpen(false);
    mutate({
      id: id as string,
      title: titleInputValue || "untitled",
      content: tempContent || "",
    });
    setIsEditable(false);
  };

  return (
    <>
      <section className="w-3/4 truncate">
        <Link
          className="pr-1 underline-offset-2 hover:underline"
          href="/journal"
        >
          Journal
        </Link>
        &gt;
        <span className="px-1">Entry</span>&gt;
        <span className="px-1">{`${journalEntry?.title || ""}`}</span>
      </section>
      {isLoading ? (
        <span className="flex h-full w-full items-center justify-center text-primary-500">
          <LoadingSpinner />
        </span>
      ) : (
        <>
          {!journalEntry ? (
            <span>Entry Not found</span>
          ) : (
            <>
              <div className="relative mb-2 flex justify-between">
                {!isEditable && (
                  <span>
                    <h3 className="text-4xl font-semibold text-primary-500">{`${journalEntry.title}`}</h3>
                    <p>{`Created ${journalEntry.createdAt.toLocaleString()}`}</p>
                  </span>
                )}

                <button
                  onClick={() => {
                    if (!isEditable) {
                      setIsEditable(true);
                    } else {
                      setModalIsOpen(true);
                    }
                  }}
                  type="button"
                  className="absolute -top-8 right-0 z-0 h-8 w-8 rounded border border-secondary-500 bg-base-100/40 p-1 transition hover:bg-secondary-500/50"
                >
                  {!isEditable ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // width="32"
                      // height="32"
                      viewBox="0 0 24 24"
                    >
                      <g fill="currentColor">
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157l3.712 3.712l1.157-1.157a2.625 2.625 0 0 0 0-3.712Zm-2.218 5.93l-3.712-3.712l-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                      </g>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // width="32"
                      // height="32"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94L6.28 5.22Z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {!!content && (
                <TipTapEditor
                  editor={editor}
                  refetchEntry={() => void refetch()}
                  modalIsOpen={modalIsOpen}
                  setModalIsOpen={setModalIsOpen}
                  titleInputValue={titleInputValue}
                  setTitleInputValue={setTitleInputValue}
                  content={content}
                  // tempContent={tempContent}
                  setTempContent={setTempContent}
                  isEditable={isEditable}
                  setIsEditable={setIsEditable}
                />
              )}
            </>
          )}
        </>
      )}
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
            onClick={() => {
              editor?.commands.setContent(content);
              setModalIsOpen(false);
              !!setIsEditable && setIsEditable(false);
            }}
          >
            Discard Changes
          </button>
          <button
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-3 sm:mt-0 sm:w-1/3"
            onClick={handleSave}
          >
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

JournalEntryPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default JournalEntryPage;
