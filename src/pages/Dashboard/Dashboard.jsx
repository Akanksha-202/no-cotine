import React from 'react';
import Heatmap from '../../components/Heatmap/Heatmap';
import CustomCarousel from '../../components/Carousel/Carousel';
import Multiselect from '../../components/Multiselect/Multiselect';
import PhotoCarousel from '../../components/PhotoCarousel.js/PhotoCarousel';
import StreakCalendar from '../../components/StreakCalendar/StreakCalendar';

function Dashboard() {
    // const carouselItems = [
    //     <div key={1} className='border-5 border-solid'>Content 1</div>,
    //     <div key={2} className='border-5 border-solid'>Content 2</div>,
    //     <div key={3} className='border-5 border-solid'>Content 3</div>,
    // ];

    return (
        <div className='flex'>
            <div>
                <div className='m-2'>
                    <h3 className='uppercase '>Streak</h3>
                    <StreakCalendar/>
                    <h6>12 days</h6>
                </div>
                <div className='border-2 border-solid'>
                    <h4>Reason you have been Smoking</h4>
                    <Multiselect/>
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
                <h3 className="text-lg font-bold mb-4">Happy Moments for you </h3>
                <div className="max-w-lg p-0 bg-gray-200 rounded-md text-center" >
                    <PhotoCarousel/>
                </div>
                
                <div className='overflow-y-auto overflow-x-hidden max-h-30 mt-5'>
                    <Heatmap/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
