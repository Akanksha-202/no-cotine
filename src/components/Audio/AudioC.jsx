import { mic, streak } from '../../images/image';
import React, { useState } from 'react';

const AudioC = () => {
    const [audio, setAudio] = useState(new Audio());
    const [isPlaying, setIsPlaying] = useState(false);

    const stories = [
        'https://res.cloudinary.com/damtnzoo8/video/upload/v1706740774/story1_lpck97.mp3',
        'https://res.cloudinary.com/damtnzoo8/video/upload/v1706740919/story2_ig7m4i.mp3'
    ];

    const handleStoryClick = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            const randomStory = stories[Math.floor(Math.random() * stories.length)];
            const newAudio = new Audio(randomStory);
            setAudio(newAudio);
            newAudio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <img 
            src={mic} 
            alt='audio' 
            className='m-auto cursor-pointer'
            onClick={handleStoryClick}
        />
    );
};

export default AudioC;
