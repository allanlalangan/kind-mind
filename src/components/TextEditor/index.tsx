import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { useState } from 'react';

const toolbarOptions = {
  options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign'],
  inline: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'monospace',
      'superscript',
      'subscript',
    ],
  },
  blockType: {
    inDropdown: true,
    options: [
      'Normal',
      'H1',
      'H2',
      'H3',
      'H4',
      'H5',
      'H6',
      'Blockquote',
      'Code',
    ],
  },
  fontSize: {
    inDropdown: false,
    options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
  },
  list: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ['unordered', 'ordered'],
  },
};

export default function TextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={(state) => setEditorState(state)}
      toolbar={toolbarOptions}
      wrapperClassName='flex flex-col w-full'
      toolbarClassName='!text-black !mb-0 !rounded-t !border-x !border-t !border-b-0 !border-primary !shadow !z-10 !pb-2'
      editorClassName='bg-secondary p-4 h-full min-h-[300px] rounded-b border-primary border-l border-r border-b border-t-0'
    />
  );
}
