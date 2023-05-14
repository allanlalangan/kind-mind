"use client";

import styles from "./styles.module.css";
import { type Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type MenuBarProps = {
  editor: Editor | null;
};

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) {
    return null;
  }

  return (
    <section className="sticky -top-5 z-10 mb-4 flex flex-wrap rounded bg-base-950 p-4 pt-5">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`mb-1 mr-1 rounded border-2 p-2 ${
          editor.isActive("bold")
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-base-100 bg-base-950 text-white"
        }`}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`mb-1 mr-1 rounded border-2 p-2 ${
          editor.isActive("italic")
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-base-100 bg-base-950 text-white"
        }`}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`mb-1 mr-1 rounded border-2 p-2 ${
          editor.isActive("strike")
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-base-100 bg-base-950 text-white"
        }`}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`mb-1 mr-1 rounded border-2 p-2 ${
          editor.isActive("code")
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-base-100 bg-base-950 text-white"
        }`}
      >
        code
      </button>
      <button
        className="mb-1 mr-1 rounded border-2 border-base-100 bg-base-950 p-2 text-white"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        clear marks
      </button>
      <button
        className="mb-1 mr-1 rounded border-2 border-base-100 bg-base-950 p-2 text-white"
        onClick={() => editor.chain().focus().clearNodes().run()}
      >
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`mb-1 mr-1 rounded border-2 p-2 ${
          editor.isActive("paragraph")
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-base-100 bg-base-950 text-white"
        }`}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`mb-1 mr-1 rounded border-2 p-2 ${
          editor.isActive("heading", { level: 1 })
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-base-100 bg-base-950 text-white"
        }`}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`mb-1 mr-1 rounded border-2 p-2 ${
          editor.isActive("heading", { level: 2 })
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-base-100 bg-base-950 text-white"
        }`}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`mb-1 mr-1 rounded border-2 p-2 ${
          editor.isActive("heading", { level: 3 })
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-base-100 bg-base-950 text-white"
        }`}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`mb-1 mr-1 rounded border-2 p-2 ${
          editor.isActive("heading", { level: 4 })
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-base-100 bg-base-950 text-white"
        }`}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`mb-1 mr-1 rounded border-2 p-2 ${
          editor.isActive("heading", { level: 5 })
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-base-100 bg-base-950 text-white"
        }`}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`mb-1 mr-1 rounded border-2 p-2 ${
          editor.isActive("heading", { level: 6 })
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-base-100 bg-base-950 text-white"
        }`}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`mb-1 mr-1 rounded border-2 p-2 ${
          editor.isActive("bulletList")
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-base-100 bg-base-950 text-white"
        }`}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`mb-1 mr-1 rounded border-2 p-2 ${
          editor.isActive("orderedList")
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-base-100 bg-base-950 text-white"
        }`}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`mb-1 mr-1 rounded border-2 p-2 ${
          editor.isActive("codeBlock")
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-base-100 bg-base-950 text-white"
        }`}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`mb-1 mr-1 rounded border-2 p-2 ${
          editor.isActive("blockquote")
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-base-100 bg-base-950 text-white"
        }`}
      >
        blockquote
      </button>
      <button
        className="mb-1 mr-1 rounded border-2 border-base-100 bg-base-950 p-2 text-white"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        horizontal rule
      </button>
      <button
        className="mb-1 mr-1 rounded border-2 border-base-100 bg-base-950 p-2 text-white"
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        hard break
      </button>
      <button
        className="mb-1 mr-1 rounded border-2 border-base-100 bg-base-950 p-2 text-white"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </button>
      <button
        className="mb-1 mr-1 rounded border-2 border-base-100 bg-base-950 p-2 text-white"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </button>
    </section>
  );
};

const TipTapEditor = () => {
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

  return (
    <div className="relative">
      <MenuBar editor={editor} />
      <div className="rounded bg-base-100/40">
        <EditorContent className={styles.ProseMirror} editor={editor} />
      </div>
    </div>
  );
};

export default TipTapEditor;
