import { Navbar, PromptArea, PromptResult } from "../../containers";

import "./home.scss";

export default function Home() {
  return (
    <div className="app__home text-white font-bold" >
      <Navbar />
      <div className="w-full h-screen flex justify-center items-start pt-32 px-6" >
        <div className="w-10/12 h-full" >
          <PromptArea />
        </div>
        <div className="w-2/12 h-full" >
          <PromptResult />
        </div>
      </div>
    </div>
  )
};

