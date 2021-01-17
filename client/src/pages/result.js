import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';

function Result(props) {
    // const [allData, setAllData] = useState()
    console.log("Props is", props);
    const userData = props.location.data;
    
    return(
        <div className="result-container">
            <br />
            <h1 style={{fontFamily: "Montserrat"}}> Your estimated vaccination date is {userData['month']}, 2021 ({userData['phase']} phase)! </h1>
            <br />
            <br />
            <p>Result based on Ontario's <a href="https://files.ontario.ca/moh-covid-19-vaccine-technical-briefing-en-january-13-2021-2021-01-13.pdf"> COVID-19 Vaccination Update</a>. Results do not constitute confirmation of administration on the indicated date. </p>
        </div>
    );
}

// loop through mongo score +1 for each score greater than submitted score to get rank

export default Result;
