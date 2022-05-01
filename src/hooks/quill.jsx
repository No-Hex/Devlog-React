import React from 'react';

import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css';


export default () => {
    const { quill, quillRef } = useQuill();


    return (
        <div className='w-full'>
            <div ref={quillRef} />
        </div>
    );
};