import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links = [{

        id: 1,
        child:(
            <>linkedin <FaLinkedin size={30}/>
                    </>
        ),
        href: "https://www.linkedin.com/",
        style: 'rounded-tr-md'

        },
        {

        id: 2,
        child:(
            <>Github <FaGithub size={30}/>
                    </>
        ),
        href: "https://github.com/jacobbinala",

        },
        {

            id: 3,
            child:(
                <>mail <HiOutlineMail size={30}/>
                        </>
            ),
            href: "mailto:jacobmbinala@gmail.com",
    
        },
        {

            id: 4,
            child:(
                <>resume <BsFillPersonLinesFill size={30}/>
                        </>
            ),
            href: "/resume.pdf",
            style: 'rounded-br-md',
            download:true,
    
        },
        

    ]




  return (
    <div className="flex-col top-[35%] left-0 fixed hidden md:flex">
        <ul>
            {links.map(({id,child,style,download,href}) => (

                <li key={id}  className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-slate-600 hover:rounded-md hover:ml-[-10px] duration-300 "+" "+ style}>
                <a download={download} 
                    target='_blank' 
                    href={href} 
                    rel="noreferrer"
                    className="flex justify-between items-center w-full text-white">
                    <>{child}</>
                    </a>
                </li>

            ))}
           
        </ul>
    </div>
  )
}

export default SocialLinks