import { useState } from 'react'
import './App.css'
import './components/nav.jsx'
import Nav from "./components/nav.jsx";
import Expr from "./components/exp.jsx"
import Learn from "./components/learn_button.jsx";

function App() {
  return (
      <div className="h-full">
        <div className="bg-hero-bg bg-cover md:pl-24 h-full w-full">
            <Nav />
            <div className="flex h-full">
                <div className="w-6/12 flex flex-col pl-4 h-full justify-center pr-4 space-y-6">
                    <p className="md:text-6xl text-4xl font-bold">Experience the Fusion
                        of Technology and
                        Culture</p>
                    <p>Join us for an unforgettable celebration of innovation and creativity.</p>
                    <Learn />
                </div>
                <div className="flex justify-end items-center h-full w-6/12">
                    <img src="/assets/Leonardo_Diffusion_Craft_an_imaginative_and_lively_image_of_a_0%201.png"
                    className="md:h-5/6 h-1/2" />
                </div>
            </div>
         </div>

          <Expr></Expr>

      </div>
  );
}
export default App;
