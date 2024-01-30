import React, {useState} from 'react';
import Heatmap from '../../components/Heatmap/Heatmap';
import CustomCarousel from '../../components/Carousel/Carousel';
import Modal from 'react-modal';
import Multiselect from '../../components/Multiselect/Multiselect';
import Navbar from '../../components/Navbar/Navbar';
import { streak } from '../../images/image';

function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const carouselItems = [
        <div key={1} className='border-5 border-solid'>Content 1</div>,
        <div key={2} className='border-5 border-solid'>Content 2</div>,
        <div key={3} className='border-5 border-solid'>Content 3</div>,
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Multiselect Modal"
            >
                <div>
                    <h2>Select Options</h2>
                    <Multiselect />
                    <button onClick={closeModal} className='mt-4 p-2 bg-gray-500 text-white rounded-md'>Close Modal</button>
                </div>
            </Modal>


            <Navbar />
            <div className='flex mt-20'>
                <div>
                    <div className="p-4 m-4 ml-20 border rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold uppercase mb-2">Streak</h3>
                        <div className='flex'>
                            <h6 className="text-2xl">12 days</h6>
                            <img src={streak} alt='streak' className='h-8' />
                        </div>
                    </div>

                    <button onClick={openModal} className='mt-4 p-2 bg-blue-500 text-white rounded-md'>Open Multiselect Modal</button>

                    <div className='border-2 border-solid'>
                        <h4>Reason you have been Smoking</h4>
                        {/* <div className='overflow-y-auto max-h-20'>
                        <ul>
                            <li>Reason 1</li>
                            <li>Reason 2</li>
                            <li>Reason 3</li>
                            <li>Reason 4</li>
                            <li>Reason 5</li>
                        </ul>
                    </div> */}
                    </div>
                    <div className='flex px-10'>
                        <div className='border-2 h-40 w-40'>
                            <h4>Time Capsule</h4>
                        </div>
                        <div className='border-2 h-40 w-40'>
                            <h4>Stat of the day</h4>
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
                        <h1>Custom Carousel</h1>
                        <CustomCarousel items={carouselItems} />
                        <h3>Happy Moments for you + </h3>
                    </div>
                    <div className='overflow-y-auto max-h-30'>
                        <Heatmap />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Dashboard;
