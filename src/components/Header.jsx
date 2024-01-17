import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    let [path, setPath] = useState(window.location.pathname);
    return (
        <header>
            <nav className="font-Lora bg-dark border-gray-200 px-6 py-[34px]">
                <div className="flex justify-between">
                    <ul className="flex-row text-white">
                        <Link className='inline-block mr-6 font-medium' to="/" onClick={() => setPath("/")}>
                            Home
                        </Link>
                        <Link className='inline-block mr-6 font-medium' to="/about-me" onClick={() => setPath("/about-me")}>
                            About
                        </Link>
                        <Link className='inline-block mr-6 font-medium' to="/contact-me" onClick={() => setPath("/contact-me")}>
                            Contact
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header;