import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AudioCard from '../../components/audioCard/AudioCard'
import { meditate, peace } from '../../images/image'
import { therapy1, therapy2 } from '../../audio/audio'

function HypnoTherapy() {
  return (
    <div>
        <Navbar />
        <div className='mt-20 flex justify-center gap-24'>
            <AudioCard
                image={meditate}
                name="Meditation"
                desc="Hypnotherapy for Quitting Smoking and Calming the Mind: Explore the benefits of hypnotherapy in your journey to quit smoking. Discover how this therapeutic technique helps you break free from the smoking habit, while promoting mental clarity, emotional calmness, and overall well-being."
                audioSrc="https://res.cloudinary.com/damtnzoo8/video/upload/v1706632702/Stop_Smoking_Self_Hypnosis_Quit_Now_Session_jss2oh.mp3"
            />
            <AudioCard
                image={peace}
                name="Peace"
                desc="Unlock the Power of Hypnotherapy: Immerse yourself in a transformative hypnotherapy session designed to support you in quitting smoking and cultivating a calm mind. Delve into the soothing guidance that empowers you to overcome cravings, instill positive habits."
                audioSrc="https://res.cloudinary.com/damtnzoo8/video/upload/v1706633428/Sleep_Hypnosis_to_Quit_Smoking_4_Hour_Sleep_Meditation_-_Black_Screen_128kbps_1_huouad.mp3"
            />
        </div>
    </div>
  )
}

export default HypnoTherapy