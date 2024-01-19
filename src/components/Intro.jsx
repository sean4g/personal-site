import React, { useState } from 'react';
import { Link } from "react-router-dom";
import garden from '../assets/mom.jpg'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';

function Intro() {
    return (
        <div className='grid grid-cols-2 items-center bg-blue-100'>
            <div>
                <img src={garden} alt="plant" className='w-full h-full'/>
            </div>
            <div className="flex text-left items-left flex-col pl-12 pt-12 pb-12 font-Lora w-9/12">
                <div className="text-7xl mb-1 md:mb-3 font-bold" >
                    <h1 className='inline-block '>I'm&nbsp;</h1>
                    <h1 className='inline-block text-dark-blue'> Sean Wang</h1>
                </div>
                <div className='text-lg md:text-xl mb-3 font-semibold '>
                    <p className='inline-block'>Computer Engineer </p>
                    <p className='inline-block'>&nbsp;&&nbsp;</p>
                    <p className='inline-block  '>Software Developer</p>
                </div>
                
                <p className='text-base mb-6 whitespace-normal'>full stack developer, master's student at Purdue University with an emphasis in artificial intelligence, looking for a full time job in software or computer 
                engineering.</p>
                <div className='text-base mb-6 whitespace-normal'>
                    <p className='inline-block'>learn more&nbsp;</p>
                    <Link className='text-emerald-500 font-semibold' to="/about-me">
                        about me
                    </Link>
                    <p className='inline-block'>&nbsp;or&nbsp;</p>
                    <Link className='text-emerald-500 font-semibold' to="/contact-me">
                        contact me
                    </Link>
                </div>
                <div className='flex-none mt-3'>
                    <a href='https://www.linkedin.com/in/sean-wang4/' target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className='py-1 pr-2'/>
                    </a>
                    <a href='https://github.com/sean4g' target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className='py-1 px-2'/>
                    </a>
                    <a href='https://www.instagram.com/seanzwang/' target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className='py-1 px-2'/>
                    </a>
                </div>
                
            </div>
            
        </div>

        
    );
}

export default Intro;