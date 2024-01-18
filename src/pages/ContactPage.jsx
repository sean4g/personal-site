import React from "react";
import Contact from '../components/Contact.jsx'

function ContactPage(){
    document.title = "seanport";

    return (
        <div className="min-h-screen flex bg-slate fill py-14">
            <Contact />
        </div>
    );
};

export default ContactPage;