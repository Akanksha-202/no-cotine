import React, { useState } from 'react';

const AudioCard = ({ image, name, desc, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative rounded-xl w-80 shadow-xl transform hover:scale-105 transition-transform ">
      {/* Image */}
      <div className="h-3/4">
        <img src={image} alt="Audio Card" className="object-cover w-full h-full" />
      </div>
      
      {/* Play button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          className="bg-blue-500 text-white rounded-full p-2"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v18l18-9L5 3zm0 0h2v18H5V3z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Text */}
      <div className="h-1/4 p-2">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-xs text-justify">{desc}</p>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src={audioSrc}></audio>
    </div>
  );
};

export default AudioCard;
