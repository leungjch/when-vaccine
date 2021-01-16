import React from 'react';
import "../styles/home.css";
import SurveyForm from '../components/surveyForm'
function Home() {

    return (
        <div>
        <h1>When Vaccine</h1> 
        <div style={{width:"100%", marginLeft:"10em"}}>
            <SurveyForm />
        </div>

        </div>

    );
}

export default Home;