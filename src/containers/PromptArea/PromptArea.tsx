import { useEffect, useState } from "react";
import { BsMicFill } from "react-icons/bs";

import { MicrophoneModal } from "../../components";

import "./promptarea.scss";


function PromptArea() {
  const [text, setText] = useState<string>("")
  const [isMicrophoneModal, setIsMicrophoneModal] = useState<boolean>(false)
  const [wordCounts, setWordCounts] = useState<number>(text.split(" ").length - 1)

  function openMicrophoneModal() {
    setIsMicrophoneModal(true)
  }

  function closeMicrophoneModal() {
    setIsMicrophoneModal(false)
  }

  useEffect(() => {
    setWordCounts(text.split(" ").length - 1)
  
    return () => {
      wordCounts
    }
  }, [text])

  return (
    <div className="app__home-promptarea w-full h-full" >
      {isMicrophoneModal && (
        <MicrophoneModal closeMicrophoneModal={closeMicrophoneModal} />
      )}
      <div className="w-[97%] h-[80%] flex justify-center items-start border border-[#b3b3b3] rounded-md p-1" aria-placeholder="Write something..." aria-valuetext="string" datatype="string" >
        <textarea style={{ resize: "none" }} onChange={e => setText(e.target.value)} className="w-full h-full p-6 text-[#101010] font-normal outline-none" name="" id="" value={text} placeholder="Write something..." >
          {text}
        </textarea>
        <div className="w-[3%] py-4" >
          <BsMicFill className="text-[#10a37f] cursor-pointer" onClick={openMicrophoneModal} />
        </div>
      </div>
      <div className="w-[97%] h-[10%] flex justify-between items-center mt-5 mb-4" >
        <button className="bg-[#10a37f] py-2 px-4 rounded-md" type="button" >Submit</button>
        <div className="bg-[#d9d9e3] p-2 rounded-full text-[#101010]" datatype="number" >
          {wordCounts}
        </div>
      </div>
    </div>
  )
};


export default PromptArea;

