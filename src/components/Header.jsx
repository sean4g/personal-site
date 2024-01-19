import React, { useState } from "react";
import { Link } from "react-router-dom";
import seanport from "../assets/seanport logo.png"

function Header() {
    return (
        <header>
            <nav className="font-Lora bg-sky-200 border-gray-200 py-2 px-2">
                <div className="flex-row justify-between mt-3 mr-4">
                    <ul className="flex items-center text-white">
                        <img className="inline ml-8 w-1/6 h-auto" src={seanport} />
                    
                        <Link className='ml-auto inline-block mr-6 font-medium mb-4 text-lg' to="/">
                            Home
                        </Link>
                        <Link className='inline-block mr-6 font-medium mb-4 text-lg' to="/about-me">
                            About
                        </Link>
                        <Link className='inline-block font-medium mr-6 mb-4 text-lg' to="/contact-me">
                            Contact
                        </Link>
                
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header;