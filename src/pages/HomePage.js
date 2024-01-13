import React, { useState } from "react";
import Intro from '../components/Intro'
import Contact from "../components/Contact";

function HomePage(){
    document.title = "seanport";

    return (
        <div>
            <Intro />
            <Contact />
        </div>
    );
};

export default HomePage