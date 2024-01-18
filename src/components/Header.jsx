import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    let [path, setPath] = useState(window.location.pathname);
    return (
        <header>
            <nav className="font-Lora bg-dark border-gray-200 px-6 py-[34px]">
                <div className="flex justify-between">
                    <ul className="flex-row text-white">
                        <Link className='inline-block mr-6 font-medium' to="/seanport/" onClick={() => setPath("/seanport/")}>
                            Home
                        </Link>
                        <Link className='inline-block mr-6 font-medium' to="/seanport/about-me" onClick={() => setPath("/seanport/about-me")}>
                            About
                        </Link>
                        <Link className='inline-block mr-6 font-medium' to="/seanport/contact-me" onClick={() => setPath("/seanport/contact-me")}>
                            Contact
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header;