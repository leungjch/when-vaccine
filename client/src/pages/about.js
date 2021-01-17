import React from 'react';

import logo from '../assets/logo2.png';
import "../styles/about.css";

function About() {
    return (
        <div className="about-container">
            <div className="title-area">
                <h1 className="title"> About "When Vaccine?"</h1>
            </div>
            <div className="about-text-area">
                <p className="text">
                    With the vaccine now being distributed in Ontario, the question arises: "When will I receive my dose?"
                </p>
                <p className="text">
                    Unfortunately, it is extremely difficult to get an answer to this question. For this reason, we have created "When Vaccine?". 
                    With our advanced algorithms, information from the Government of Ontario, and past data from other users, we can accurately predict
                    the month when you will get your vaccine. 
                </p>

                <img className="page-image" src={logo} />

                <p className="text">
                    <b>Disclaimer:</b> Your responses will be stored to increase the accuracy of our algorithm. However, no identifying information will be stored in 
                    our database. 
                </p>
                <p className="text">
                     To learn more about Ontario's COVID-19 Vaccination Update (Released January 13, 2021), refer to <a href="https://files.ontario.ca/moh-covid-19-vaccine-technical-briefing-en-january-13-2021-2021-01-13.pdf">here </a>
                </p>
            </div>
        </div>
    );
}

export default About;