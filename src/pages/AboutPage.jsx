import React, { useState } from "react";
import { Link } from "react-router-dom";
import Intro from '../components/Intro'

function AboutPage(){
    document.title = "seanport";
    let [path, setPath] = useState(window.location.pathname);
    return (
        <div className="flex flex-cols bg-slate font-Lora">
            <div className="p-12">
                <h1 className="text-7xl mb-1 md:mb-3 font-semibold">About Me</h1>
                <p className="mb-1 md:mb-3"> 
                    Hi there! My name is Sean, and I'm a graduate of Purdue University. I got my bachelors in Computer Engineering in 2023,
                    and I'm pursuing my masters in the same degree, with a focus in artificial intelligence via a 4+1 (graduating 2024). 
                    I have previous experience and skill with full stack development, with an emphasis in integrating artificial intelligence
                    into large scale applications. To me, being able to connect the front-end and back-end together, and create an application
                    that comes to life is very gratifying. I am currently looking for full time opportunities after I graduate in May 2024. I am
                    excited to be able to contribute to any industry and put my skills to the test!
                </p>
                <p className="inline-block mb-1 md:mb-3">Other than coding, I enjoy reading and entertaining myself with any medium of art. Sometimes I&nbsp;</p>
                <Link className='text-emerald-500 font-semibold' to="/sean-moment" onClick={() => setPath("/sean-moment")}>
                    write
                </Link> 
                <p className="inline-block">&nbsp;stuff too!</p>
                <h2 className="text-4xl mb-1 md:mb-3 font-medium">Experiences/Skills</h2>
                <p className="mb-1 md:mb-3">
                    Throughout my four years as an undergrad, I have had two internships at LatticeWork.
                    Starting in the beginning of highschool, I have had around 8 years of coding experience, 4 years of digital/analog circuit design and
                    have obtained important knowledge in related fields like computer security, operating systems, and microprocessor interfacing.
                </p>
                <p className="mb-1 md:mb-3">
                    Here are some of the skills in my toolkit (not all-inclusive): 
                </p>
                <p className="mb-1 md:mb-3">
                    Python/C++/C/JavaScript/Java/HTML/CSS/MatLab/Verilog/React/SQLite/TensorFlow/PyTorch
                </p>
            </div>
            
        </div>
    );
};

export default AboutPage;