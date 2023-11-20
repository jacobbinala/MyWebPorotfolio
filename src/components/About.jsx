import React from 'react'

const About = () => {
  return (
    <div name="about" className=" w-full h-screen bg-gradient-to-b from-slate-800 to-black text-white">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className=" pb-8">
                <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p className="text-xl mt-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis sit obcaecati odio quia eligendi ut. 
                Corrupti error assumenda nihil. Dolorem magni quia laborum, quaerat eius aliquid molestiae quis! Sed 
                doloremque dolores unde in odit magni ullam officia, quae ex itaque! Nulla delectus eos autem commodi 
                adipisci eaque beatae quidem optio!</p>
                <br />
            <p className=" text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, impedit!</p>

        </div>
    </div>
  )
}

export default About