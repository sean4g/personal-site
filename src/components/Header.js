import React, { useState } from "react";
import "../styles/Header.css"

function Header() {
    // let [path, setPath] = useState
    return (
        <div className="font-Lora">
            <header>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
};

export default Header;