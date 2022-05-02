import React from 'react'
import { image } from '../../Constants'
import { Link } from 'react-router-dom';
import { MdKeyboardReturn } from 'react-icons/md'
import Quill from '../../hooks/quill';

const NewPost = () => {
    return (
        <form>
            <div className="flex lg:justify-between sm:justify-center">
                <div className="">
                    <h3
                        className="text-gray-200 font-semibold lg:text-2xl sm:text-xl mb-2 uppercase"
                    >
                        New Post
                    </h3>
                </div>
                <div className="space-x-5">
                    <Link to='/admin/articles' className='flex justify-center items-center text-gray-200 border-2 border-gray-200 px-2 rounded hover:text-gray-900 hover:bg-gray-200 ease-in duration-300'><MdKeyboardReturn className='mr-1 text-lg' /> Return</Link>
                </div>
            </div>

            <hr className="text-gray-200" />

            <div className="mt-12">
                <div className="inline-block space-y-4">
                    <label className='text-gray-200 font-medium uppercase'>Post title</label>
                    <div className="">
                        <input type="text" name="" id="" className='bg-gray-800 border-2 border-gray-700 px-3 py-2 rounded-lg' placeholder='TITLE' />
                    </div>
                </div>
                <div className="mt-10 space-y-4">
                    <label className='text-gray-200 font-medium uppercase'>Post Body</label>
                    <div className="bg-gray-200 text-gray-900">
                        <Quill />
                    </div>
                </div>

                <div className="flex items-center justify-between mt-16">
                    <div className="">
                        <button className='w-96 bg-gray-700 text-gray-200 px-5 py-3 rounded'>Cancel</button>
                    </div>
                    <div className="">
                        <button className='w-96 bg-gray-200 text-gray-900 px-5 py-3 rounded'>Publish</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default NewPost;