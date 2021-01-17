import React, { Component, useEffect, useState } from 'react';

import { Link, Redirect, useHistory } from 'react-router-dom';

function Result(props) {
    const [allData, setAllData] = useState([]);
    const [rank, setRank] = useState(0);
    const [userData, setUserData] = useState({age: 25,
        isBipoc: true,
        isChronicIllness: true,
        isConditions: false,
        isHighRiskSetting: false,
        isOlderThan60Years: false,
        isReserve: true,
        isRespiratoryIllness: true,
        isYoungerThan2Years: true,
        month: "January",
        occupation: "Health care worker",
        phase: "First",
        residence: "Single home",
        score: 83,
        })
    console.log("Props is", props);

    const history = useHistory();


    //Getting queue #
    useEffect(async () => {
        const fetchData = async () => {
            let response = await fetch('/api/getData')
            const data = await response.json()
            setAllData(data);
            getNum(data);
        }
        fetchData();
        if (props.location.data !== null)
        {
            setUserData(props.location.data)
        }

    }, []);
    function getNum(data) {
        let temp = 0;
        var currentData = data;
        for (let val of currentData) {
            var entry = val.score;
            if (entry >= userData['score']) {
                temp += 1;
            }
        }
        setRank(temp);
    }

    return(
        <div className="result-container">
            <br />
            <h1 style={{fontFamily: "Montserrat"}}> Your estimated vaccination date is in {userData['month']}, 2021 ({userData['phase']} phase)! </h1>
            <br />
            <h3 style={{fontFamily: "Montserrat"}}>You rank <b>{rank}</b> out of <b>{allData.length}</b> submissions.</h3>
            <br />
            <br />
            <p>Result based on Ontario's <a href="https://files.ontario.ca/moh-covid-19-vaccine-technical-briefing-en-january-13-2021-2021-01-13.pdf"> COVID-19 Vaccination Update</a>. Results do not constitute confirmation of administration on the indicated date. </p>
        </div>
    );
}

// loop through mongo score +1 for each score greater than submitted score to get rank

export default Result;
