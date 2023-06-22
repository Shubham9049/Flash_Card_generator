import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import CreateNew from './CreateNew'



function CreateFlashcard() {
    return (
        <>
            <Navbar />
            <div className='main bg-red-50 w-screen py-20 min-h-screen' >
                {/* create New and My FlashCard Section */}
                <div className='m-auto  w-4/5 '>
                    <div className='flex'>
                        <div className='m-2 '>
                            <button className="font-bold rounded-md ">
                                Create New
                            </button>

                        </div>
                        <div className='m-2'>
                            <button className="font-bold rounded-md ">
                                My Flashcard
                            </button>

                        </div>

                    </div>
                <hr className="border bg-black-700 mt-1 border-gray-300" />
           <Routes>
            <Route index path="/" element={<CreateNew />} />
            </Routes>
                </div>
            </div>
        </>

    )
}

export default CreateFlashcard
