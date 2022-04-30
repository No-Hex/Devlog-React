import React from 'react'
import Modal from 'react-modal'
import { image } from '../../Constants';


const customStylesModal = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#2A334280'
    },
    content: {
        width: '1024px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#2A3342',
        border: 'none'

    },
};

Modal.setAppElement("#root");


function AdminArticles() {

    // Modal Article
    const [modalIsOpenArticle, setIsOpenArticle] = React.useState(false);

    const openModalArticle = () => {
        setIsOpenArticle(true);
    }

    const closeModalArticle = () => {
        setIsOpenArticle(false);
    }

    // Modal Post
    const [modalIsOpenPost, setIsOpenPost] = React.useState(false);

    const openModalPost = () => {
        setIsOpenPost(true);
    }

    const closeModalPost = () => {
        setIsOpenPost(false);
    }


    return (
        <div className="">
            <div className="flex lg:justify-between sm:justify-center">
                <div className="">
                    <h3
                        className="text-gray-200 font-semibold lg:text-3xl sm:text-2xl mb-2"
                    >
                        Articles
                    </h3>
                </div>
                <div className="">
                    <button onClick={openModalArticle} className='flex justify-center space-x-2  items-center text-gray-200 border-2 border-gray-200 px-2 rounded hover:text-gray-900 hover:bg-gray-200 ease-in duration-300'>New Article</button>
                    <Modal isOpen={modalIsOpenArticle} style={customStylesModal}>

                        <div className="px-5">

                            <div className="flex justify-between items-center mt-5">
                                <div className="flex items-center lg:space-x-5 sm:space-x-2">
                                    <img src={image.logo} className="lg:w-10 sm:w-5 md:w-10" alt="" />
                                    <h3 className='font-bold text-gray-200 sm:text-xs md:text-lg lg:text-2xl'>HEX DEVLOG</h3>
                                </div>

                                <div className="">
                                    <h3 className='font-bold text-gray-200 sm:text-xs md:text-lg lg:text-2xl'>NEW ARTICLE</h3>
                                </div>
                            </div>

                            <div className="mt-16">

                                <div className="inline-block space-y-4">
                                    <label className='text-gray-200 font-medium uppercase'>Article title</label>
                                    <div className="">
                                        <input type="text" className='bg-gray-800 border-2 border-gray-700 px-3 py-2 rounded-lg' name="title" id="" placeholder='TITLE' />
                                    </div>
                                </div>

                                <div className="mt-8 space-y-4">
                                    <label className='text-gray-200 font-medium uppercase'>Article Description</label>
                                    <div className="">
                                        <textarea name="" className='bg-gray-800 border-2 border-gray-700 text-gray-200 px-3 py-2 rounded-lg w-full h-32' id="" cols="30" rows="10" placeholder='DESCRIPTION'></textarea>
                                    </div>
                                </div>

                                <div className="mt-8 space-y-4">
                                    <label className='text-gray-200 font-medium uppercase'>Article Cover</label>

                                    <div className="flex items-center space-x-6">
                                        <div className="">
                                            <img src="" className='w-60 h-40 rounded object-cover' alt="" />
                                        </div>
                                        <div className="">
                                            <input type="file" accept='image/*' className='block w-full text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold  file:bg-none hover:file:bg-gray-200 file:text-gray-900 cursor-pointer ease-in duration-300' />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-8">
                                    <div className="">
                                        <button onClick={closeModalArticle} className='w-96 bg-gray-700 text-gray-200 px-5 py-3 rounded'>Cancel</button>
                                    </div>
                                    <div className="">
                                        <button className='w-96 bg-gray-200 text-gray-900 px-5 py-3 rounded'>Publish</button>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </Modal>
                </div>
            </div>

            <hr className="text-gray-200" />

            <div className="my-10">
                <div className="flex justify-between">
                    <div className="flex space-x-10 items-center">
                        <div className="">
                            <img src="" className='w-80 rounded-lg object-cover' alt="" />
                        </div>


                        <div className="space-y-8">
                            <h3 className='text-gray-200 font-bold uppercase'>Titulo</h3>
                            <p className='text-gray-400 font-semibold uppercase'>00/00/00</p>
                            <div className="">
                                <button onClick={openModalPost} className='text-gray-200 hover:bg-gray-200 hover:text-gray-900 border-2 border-gray-200 px-8  rounded '>Add Post</button>
                                <Modal isOpen={modalIsOpenPost} style={customStylesModal}>

                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-10">
                        <div className=""><button className='text-gray-400 hover:text-gray-200 ease-in duration-300 text-3xl'><span class="iconify" data-icon="carbon:view"></span></button></div>
                        <div className=""><button className='text-gray-400 hover:text-gray-200 ease-in duration-300 text-3xl'><span class="iconify" data-icon="fluent:edit-20-regular"></span></button></div>
                        <div className=""><button className='text-gray-400 hover:text-gray-200 ease-in duration-300 text-3xl'><span class="iconify" data-icon="ion:trash-bin-outline"></span></button></div>
                    </div>
                </div>
            </div>

            <hr className="text-gray-200" />

        </div >
    )
}

export default AdminArticles