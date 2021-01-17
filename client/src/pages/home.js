import React from 'react';
import "../styles/home.css";
import SurveyForm from '../components/surveyForm'

function Home() {

    return (
        <div style={{fontFamily: "Montserrat"}}>
        <h1 className="title">When Vaccine &#128137;&#8265;&#65039;</h1> 
        <div style={{width:"100%", padding:"1%" }}> {/*removed margin-left: 10em*/}
            <SurveyForm />
        </div>

        </div>

    );
}

export default Home;