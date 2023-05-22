import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import LoadingSpinner from "~/components/LoadingSpinner";
import TipTapEditor from "~/components/TipTapEditor";
import { type NextPageWithLayout } from "~/pages/_app";
import { api } from "~/utils/api";

const JournalEntryPage: NextPageWithLayout = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState("");
  const [titleInputValue, setTitleInputValue] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const { data: journalEntry, isLoading } = api.entries.getEntry.useQuery(
    { id: id as string },
    {
      onSuccess: (data) => {
        console.log("getEntry success");
        if (!!data) {
          setContent(data.content);
          setTitleInputValue(data.title);
        }
      },
    }
  );

  return (
    <>
      <section>
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
        <article className="col-span-8 mb-2 flex flex-col rounded">
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
                  onClick={() => setIsEditable(!isEditable)}
                  type="button"
                  className="absolute -top-8 right-0 z-20 h-8 w-8 rounded border border-secondary-500 bg-base-100/40 p-1 transition hover:bg-secondary-500/50"
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
              {content && (
                <TipTapEditor
                  titleInputValue={titleInputValue}
                  setTitleInputValue={setTitleInputValue}
                  content={content}
                  isEditable={isEditable}
                />
              )}
            </>
          )}
        </article>
      )}
    </>
  );
};

JournalEntryPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default JournalEntryPage;
