import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useState } from 'react'
import "./DashPost.scss"

function DashPosts () {
  const [x, setX]  = useState()
  return (
    <>
        <CKEditor
          editor={ ClassicEditor }
          data="<p>Hello from CKEditor 5!</p>"
          onChange={ (e, editor) => {
              // You can store the "editor" and use when it is needed.
              setX(editor.getData())
              console.log(editor.getData())
          }}
          />
        <div dangerouslySetInnerHTML={{ __html: x }}></div>
    </>
  )
}

export default DashPosts