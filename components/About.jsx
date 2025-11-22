import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div>
            <section id='about' className="flex dark:bg-[rgb(16,22,37)] flex-col md:flex-row items-center w-full p-2 py-16" >
                <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <span className="uppercase dark:text-[rgb(14,178,243)] text-[rgb(16,129,212)] tracking-widest text-xl font-thin">About</span>
                        <h2 className="font-bold py-4 dark:text-[rgb(14,178,243)]">Who I Am</h2><br />

                        <p className='dark:text-white'>// A life long learner with a drive to solve problems with code</p>
                        <p className="py-2 dark:text-white text-gray-600">I specialize in building responsive fullstack web applications. I&apos;m passionate about learning new technologies and understand that there is more than one way to accomplish a task. My current focus is building applications that use React, Express, MySql and Node. I&apos;m a quick learner and can pick up new tech stacks as needed. I believe that being a great developer involves not sticking to one specific language but choosing the best tool for the job.</p>
                        <p className="py-2 dark:text-white text-gray-600">I&apos;sve spent the last 4 years in Information Technology as an IT Support Specialist. My desire to becoming a well-rounded Technologist has lead me to obtaining my CompTIA A+, Security+, and Nework+.  When my computers turned off Im enjoying time with my family, the outdoors, or staying active.</p>
                        
                        <Link className="underline text-gray-600" href="/#projects">Check out some of my projects</Link>
                     </div>
                    {/*<div className=" dark:bg-white flex justify-center w-ful h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center p-4 hover:scale-105 transition duration-300 ease-in">
                        <Image width={450} height={200} className="rounded-xl" src={about} alt='' />
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default About