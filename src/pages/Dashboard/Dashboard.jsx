import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import Heatmap from '../../components/Heatmap/Heatmap';
import Modal from 'react-modal';
import Multiselect from '../../components/Multiselect/Multiselect';
import Navbar from '../../components/Navbar/Navbar';
import { mic, streak } from '../../images/image';
import PhotoCarousel from '../../components/PhotoCarousel.js/PhotoCarousel';
import { effectsOfSmoking } from '../../components/Stats/data';

function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [selectedStat, setSelectedStat] = useState(null);
    const synth = window.speechSynthesis;  // Access the speech synthesis API

    const handleStatClick = (stat) => {
        // Set the selected stat
        setSelectedStat(stat);

        // Create a new SpeechSynthesisUtterance instance
        const utterance = new SpeechSynthesisUtterance("Smoking causes" + stat);

        // Speak the selected stat
        synth.speak(utterance);
    };

    return (
        <>
            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Multiselect Modal"
            >
                <div className='mt-10'>
                    <h2>Reason you Smoked today??</h2>
                    <Multiselect />
                    <div className="mt-4">
                        <h2 className="block text-sm font-medium text-red-700">
                            How many cigarettes did you have today?
                        </h2>
                        <input
                            type="number"
                            id="cigarettesInput"
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>

                    <button onClick={closeModal} className='mt-4 p-2 bg-gray-500 text-white rounded-md'>
                        Submit
                    </button>
                </div>
            </Modal>


            <Navbar />
            <div className='flex mt-20 ml-20 '>
                <div>
                    <div className="p-4 m-4 border rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold uppercase mb-2">Streak</h3>
                        <div className='flex'>
                            <h6 className="text-2xl">12 days</h6>
                            <img src={streak} alt='streak' className='h-8' />
                        </div>
                        <button onClick={openModal} className='mt-4 p-2 bg-blue-500 text-white rounded-md'>
                            Update Streak
                        </button>

                    </div>


                    <div className='p-4 m-3 mt-5 border rounded-lg shadow-md'>
                        <h3 className='text-1xl font-bold mb-2'>Reason you have been Smoking</h3>
                        <div className='overflow-y-auto max-h-20'>
                            <ul>
                                <li>Reason 1</li>
                                <li>Reason 2</li>
                                <li>Reason 3</li>
                                <li>Reason 4</li>
                                <li>Reason 5</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex px-10 gap-5 mt-8'>
                        <div className='border rounded-lg shadow-md h-40 w-40'>
                            <h4 className='flex justify-center p-3 text-black'>
                                Time Capsule
                                <FaPencilAlt className='text-lg p-1 cursor-pointer' />
                            </h4>
                            <img src={mic} alt='audio for self' className='m-auto cursor-pointer' />
                        </div>
                        <div className='border rounded-lg shadow-md h-40 w-40'>
                            <h4 className='flex justify-center p-3 text-black'>Stat of the Day</h4>
                            <img
                                src={mic}
                                alt='stat of the day'
                                className='m-auto cursor-pointer'
                                onClick={() => handleStatClick(effectsOfSmoking.healthRisks[Math.floor(Math.random() * effectsOfSmoking.healthRisks.length)])}
                            />
                        </div>

                    </div>
                </div>

                <div className='ml-20'>
                    <div className='flex'>
                        <div>
                            <h3>User Badges</h3>
                        </div>
                        <div>User</div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Happy Moments for you </h3>
                        <div className="max-w-lg p-0 bg-gray-200 rounded-md text-center" >
                            <PhotoCarousel />
                        </div>
                    </div>
                    <div className='overflow-y-auto overflow-x-hidden max-h-30 mt-5'>
                        <Heatmap />
                    </div>
                </div>



            </div>
        </>

    );
}

export default Dashboard;
