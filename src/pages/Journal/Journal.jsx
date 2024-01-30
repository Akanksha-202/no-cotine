import React from 'react'
import Edit from '../../components/Editor/Editor'
import Navbar from '../../components/Navbar/Navbar'


function Journal() {
    const handleSubmit = () => {
        // Handle submit logic here
    };

    return (
        <div className='mt-20'>
            <Navbar />
            <div className='m-5 h-80'>
                <Edit />
            </div>
            <button onClick={handleSubmit} className='mt-20 ml-8 p-2 bg-blue-500 text-white rounded-md'>
                Submit
            </button>
        </div>
    );
}

export default Journal