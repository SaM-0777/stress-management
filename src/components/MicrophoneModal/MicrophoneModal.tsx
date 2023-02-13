import { BsMicFill } from "react-icons/bs";

import "./microphonemodal.scss";
import { useState } from "react";


type MicrophoneModalPropsType = {
  closeMicrophoneModal: () => void;
}

function MicrophoneModal({ closeMicrophoneModal }: MicrophoneModalPropsType) {
  const [isListening, setIsListening] = useState<boolean>(false)

  function startListening() {
    setIsListening(true)
    // SpeechRecognition.startListening({ continuous: true, language: 'en-US' })
  }

  return (
    <div className="absolute w-screen h-screen top-0 left-0 flex justify-center items-center" >
      <div className="bg-black opacity-40 absolute top-0 left-0 w-full h-full" onClick={closeMicrophoneModal} />
      <div className="realtive w-1/2 h-[500px] p-6 flex justify-center items-center rounded-3xl bg-white z-50" >
        <BsMicFill className="absolute text-[#000] cursor-pointer" size={100} />
        <button className={`w-full ${isListening ? "bg-[#000]" : "bg-[#10a37f]"} flex justify-center items-center self-end gap-4 py-4`} >
          <BsMicFill className={`${isListening ? "text-white" : "text-[#000]"} cursor-pointer`} />
          <p className="text-black" >{isListening ? "Stop" : "Start"} Recording</p>
        </button>
      </div>
    </div>
  )
};


export default MicrophoneModal;

