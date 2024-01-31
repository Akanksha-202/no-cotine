import React, { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import Heatmap from '../../components/Heatmap/Heatmap';
import Modal from 'react-modal';
import Multiselect from '../../components/Multiselect/Multiselect';
import Navbar from '../../components/Navbar/Navbar';
import { mic, streak } from '../../images/image';
import PhotoCarousel from '../../components/PhotoCarousel.js/PhotoCarousel';
import { effectsOfSmoking } from '../../components/Stats/data';
import StreakCalendar from '../../components/StreakCalendar/StreakCalendar';
import Profile from '../../components/Profile/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { firestore } from '../../firebase/utils';
import CigaretteTrackerWithGauge from '../../components/Heatmap/Heatmap';
import AudioC from '../../components/Audio/AudioC';

function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reasons, setReasons] = useState([]);
    const [cigarettesInput, setCigarettesInput] = useState(0);
    const [fetchCigarettes, setFetchCigarettes] = useState(0);
    const { user } = useAuth0();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        handleCigarettesSubmit();
        window.location.reload();
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
    const handleStoryClick = (story) => {
        const audioElement = new Audio(story);
        audioElement.play();
    };

    const fetchUserDataByEmail = async (email) => {
        try {
            const usersCollection = collection(firestore, 'users');
            const emailQuery = query(usersCollection, where('email', '==', email));
            const querySnapshot = await getDocs(emailQuery);

            if (!querySnapshot.empty) {
                const userDoc = querySnapshot.docs[0];
                return { id: userDoc.id, data: userDoc.data() }; // Corrected the return statement
            } else {
                console.error('No user found with the specified email');
                return null;
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            return null;
        }
    };

    useEffect(() => {
        const fetchReasons = async () => {
          try {
            // Check if user and user.email are defined
            if (user && user.email) {
              const usersCollection = collection(firestore, 'users');
              const emailQuery = query(usersCollection, where('email', '==', user.email));
              const querySnapshot = await getDocs(emailQuery);
    
              if (!querySnapshot.empty) {
                const userDoc = querySnapshot.docs[0];
                setReasons(userDoc.data().reasons);
              } else {
                console.error('No user found with the specified email');
              }
            } else {
              console.error('User or user.email is undefined');
            }
          } catch (error) {
            console.error('Error fetching reasons:', error);
          }
        };

        const fetchCigarettes = async () => {
            try {
                if (user && user.email) {
                    const { id, data } = await fetchUserDataByEmail(user.email);
        
                    if (id) {
                        setFetchCigarettes(data.cigarettes);
                    }
                } else {
                    console.error('User or user.email is undefined');
                }
            } catch (error) {
                console.error('Error fetching cigarettes value:', error);
            }
        };
    
        fetchReasons();
        fetchCigarettes();
      }, [user]);

    const handleCigarettesSubmit = async () => {
        console.log('Cigarettes value:', cigarettesInput);
        try {
            if (user && user.email) {
                const { id } = await fetchUserDataByEmail(user.email);

                if (id) {
                    const usersCollection = collection(firestore, 'users');
                    await updateDoc(doc(usersCollection, id), {
                        cigarettes: cigarettesInput,
                    });

                    console.log('Cigarettes value updated successfully');
                }
            } else {
                console.error('User or user.email is undefined');
            }
        } catch (error) {
            console.error('Error updating cigarettes value:', error);
        }
    };

    


   

    return (
        <>
            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Multiselect Modal"
                ariaHideApp={false}
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
                            value={cigarettesInput}
                            onChange={(e) => setCigarettesInput(e.target.value)}

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

                        <StreakCalendar isLoggedIn={user ? true : false} />

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
                                {reasons.map((reason, index) => (
                                    <li className='capitalize' key={index}>{index + 1 + ". "}{reason}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

            
                </div>

                <div className='ml-20'>
                    <div className='flex'>
                        <div><Profile /></div>
                    </div>

                    <div className='overflow-y-auto overflow-x-hidden max-h-30 mt-5'>
                        <CigaretteTrackerWithGauge
                            dailyCigarettes={fetchCigarettes}
                        />

                    </div>

                    <div className='flex px-10 gap-5 mt-8'>
                        <div className='border rounded-lg shadow-md h-40 w-40'>
                            <h4 className='flex justify-center p-3 text-black'>
                                Sucess Stories
                            </h4>
                            <AudioC />
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



            </div>
        </>

    );
}

export default Dashboard;
