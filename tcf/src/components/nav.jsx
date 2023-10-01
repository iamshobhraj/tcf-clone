import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);

    };

    const links = [
        {name:"About us",
            path:"error"},
        {name:"Events",
            path:"error"},
        {name:"Sponsors",
            path:"error"},
    ]

    return(
        <nav className="flex justify-end md:justify-between container bg-transparent">
            {!isOpen? (<svg xmlns="http://www.w3.org/2000/svg" className="z-20 md:hidden fixed left-2 icon icon-tabler icon-tabler-menu-2 duration-700" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={(toggleNavbar)}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
        </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="z-20 md:hidden fixed left-2 icon icon-tabler icon-tabler-x duration-1000" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={(toggleNavbar)}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
        </svg>)}

            <ul className={`md:justify-center md:items-center md:space-x-12 md:p-4 bg-[#ffffff14] md:bg-transparent pl-16 pt-6 md:static fixed top-0 duration-500 ease-linear ${isOpen ? 'left-0' : 'left-[-100%]' } md:h-auto h-screen md:w-auto w-1/2 backdrop-blur-lg text-zinc-300 text-xl font-bold font-['Inter']`}>
                {
                    links.map((link,index) => (
                        <li key={index} className="md:inline-block md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300 ">
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <div className="flex ">
                <img src="/assets/NITP_Logo2%201.png" className="object-scale-down max-w-lg" alt="logo"/>
                <img src="/assets/NITP_Logo2%202.png" className="hidden md:visible object-scale-down max-w-lg" alt="logo"/>
            </div>
        </nav>
    )
}

