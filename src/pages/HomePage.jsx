import React, { useState } from "react";
import Intro from '../components/Intro'

function HomePage(){
    document.title = "seanport";

    return (
        <div>
            <Intro />
        </div>
    );
};

export default HomePage;