import React from 'react';
import "../styles/about.css";

function About() {

    return (
        <div className="about-container">
            <div className="title-area">
                <p className="title">About "When Vaccine?"</p>
            </div>
            <div className="about-text-area">
                <p className="text">
                    With the vaccine now being distributed in Ontario, the question arises: "When will I receive my dose?"
                </p>
                <p className="text">
                    Unfortunately, it is extremely difficult to get an answer to this question. For this reason, we have created "When Vaccine?". 
                    With our advanced algorithms, information from the Government of Ontario, and past data from other users, we can accurately predict
                    the month where you will get your vaccine. 
                </p>
                <p className="text">
                    Disclaimer: Your responses will be stored to increase the accuracy of our algorithm. However, no identifying information will be stored in 
                    our database. 
                </p>
            </div>
        </div>
    );
}

export default About;