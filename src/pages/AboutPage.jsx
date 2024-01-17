import React, { useState } from "react";
import { Link } from "react-router-dom";
import resume from '../assets/sean_wang_resume1.pdf'
import me1 from '../assets/me1.jpg'

function AboutPage(){
    document.title = "seanport";
    let [path, setPath] = useState(window.location.pathname);
    return (
        <div className="flex flex-cols bg-slate font-Lora min-h-screen">
            <div className="px-12 pb-12 pt-8">
                <h1 className="text-7xl mb-5 font-semibold">About Me</h1>
                <p className="mb-3 mr-8 "> 
                    Hi there! My name is Sean, and I'm a graduate of Purdue University. I got my bachelors in Computer Engineering in 2023,
                    and I'm pursuing my masters in the same degree, with a focus in artificial intelligence via a 4+1 (graduating 2024). 
                    I have previous experience and skill with full stack development, with an emphasis in integrating artificial intelligence
                    into large scale applications. To me, being able to connect the front-end and back-end together, and create an application
                    that comes to life is very gratifying. I am currently looking for full time opportunities after I graduate in May 2024. I am
                    excited to be able to contribute to any industry and put my skills to the test!
                </p>
                <p className="inline-block mb-3 ">Other than coding, I enjoy reading and entertaining myself with any medium of art. Sometimes I&nbsp;</p>
                <Link className='text-emerald-500 font-semibold' to="/sean-moment" onClick={() => setPath("/sean-moment")}>
                    write
                </Link> 
                <p className="inline-block mb-5">&nbsp;stuff too!</p>
                <h2 className="text-4xl mb-5 mr-8 font-medium">Experiences/Skills</h2>
                <p className="mb-3 mr-8">
                    Throughout my four years as an undergraduate, I have had two internships at LatticeWork.
                    Starting in the beginning of highschool, I have had around 8 years of coding experience, 4 years of digital/analog circuit design and
                    have obtained important knowledge in related fields like computer security, operating systems, and microprocessor interfacing.
                </p>
                <p className="mb-3 mr-8">
                    Here are some of the skills in my toolkit (not all-inclusive): 
                </p>
                <p className="mb-3 mr-8 font-medium w-1/3">
                    Python / C++ / C / JavaScript / Java / HTML and CSS / MatLab / Verilog / React / SQLite / TensorFlow / PyTorch
                </p>
                <a href={resume} target="_blank">
                    <button 
                        className="text-center inline-block px-5 py-3 mt-3 w-max text-base 
                            font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600">
                        View my CV
                    </button>
                </a>
            </div>
            <div>
                <img src={me1} alt="me" className='w-5/6 h-auto mt-12 mr-12'/>
            </div>
            
        </div>
    );
};

export default AboutPage;