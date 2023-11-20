import React from 'react';
import Heroimage from '../assets/heroimage.png';
import { FaCircleArrowRight } from "react-icons/fa6";

const Heropage = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black-100 to-slate-800 text-white">

        <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center">
                    <h2 className="font-extrabold text-4xl md:text-7xl">Hello Im Jacob!</h2>
                    <p className=" text-gray-500 py-4 max-w-md ">
                        Im a full stack web developer, Graphic
                        and UI/UX designer. I currently am working with
                        React, and tailwind CSS
                    </p>
                    <div>
                        <button className="group flex items-center py-3 px-6 my-2 rounded-md bg-gradient-to-r from-blue-400 to-slate-600 cursor-pointer"
                        >Portofolio  
                            <span className="px-2 group-hover:rotate-90 duration-300"><FaCircleArrowRight/></span>
                        </button>
                    </div>
                </div>
                <div className="mx-auto w-1/2 md:w-80 md:h-80"><img src={Heroimage} alt="my profile" class=" rounded-2xl" /></div>
        </div>
    </div>
  )
}

export default Heropage