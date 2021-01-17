import { React, Component, useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import DonutChart from '../components/donutChart.js';
import { Container, Row, Col } from 'react-bootstrap'
import DoughnutChart from '../components/donutChart.js'
import LineChart from '../components/lineChart.js'
import PieChart from '../components/pieChart.js'

import "../styles/data.css";

function Data() {

    // Data state
    const [allData, setAllData] = useState(null);
    const [histogramData, setHistogramData] = useState([]);
    const [pieOccupationData, setPieOccupationData] = useState([]);
    const [residenceData, setResidenceData] = useState([])

    console.log(allData)
    useEffect(async () => {
        const fetchData = async () => {
            let response = await fetch('/api/getData')
            const data = await response.json()
            setAllData(data);
            generateHistogramData(data);
            getOccupations(data)
            getResidences(data)
        }
        fetchData();

    }, []);

    function generateHistogramData(data) {
        console.log("Generate histogram data")
        if (data === null) {
            setHistogramData([])
            return
        }
        console.log("currentData is", data)
        var currentData = data
        var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (let val of currentData) {
            var entry = val.month;
            if (entry == 'January') {
                counts[0] += 1
            }
            else if (entry == 'February') {
                counts[1] += 1
            }
            else if (entry == 'March') {
                counts[2] += 1
            }
            else if (entry == 'April') {
                counts[3] += 1
            }
            else if (entry == 'May') {
                counts[4] += 1
            }
            else if (entry == 'June') {
                counts[5] += 1
            }
            else if (entry == 'July') {
                counts[6] += 1
            }
            else if (entry == 'August') {
                counts[7] += 1
            }
            else if (entry == 'September') {
                counts[8] += 1
            }
            else if (entry == 'October') {
                counts[9] += 1
            }
            else if (entry == 'November') {
                counts[10] += 1
            }
            else {
                counts[11] += 1
            }
        }
        console.log("Counts is", counts)

        let ret = [
            { name: "Jan", value: counts[0], color: "#2a4d69" },
            { name: "Feb", value: counts[1], color: "#4b86b4" },
            { name: "Mar", value: counts[2], color: "#adcbe3" },
            { name: "Apr", value: counts[3], color: "#e7eff6" },
            { name: "May", value: counts[4], color: "#63ace5" },
            { name: "Jun", value: counts[5], color: "#63ace5" },
            { name: "Jul", value: counts[6], color: "#2a4d69" },
            { name: "Aug", value: counts[7], color: "#4b86b4" },
            { name: "Sep", value: counts[8], color: "#adcbe3" },
            { name: "Oct", value: counts[9], color: "#63ace5" },
            { name: "Nov", value: counts[10], color: "#63ace5" },
            { name: "Dec", value: counts[11], color: "#2a4d69" }
        ];
        console.log("Ret is", ret)
        setHistogramData(ret);
    }

    // Generate data for pie chart
    function getOccupations(data) {
        var currentData = data
        var counts = {
            "Caregiver": 0,
            "Health care worker": 0,
            "Essential Worker (first responders, teachers, food, construction...)": 0,
            "Work from home": 0,
            "Student": 0,
            "Other": 0
        }
        for (let entry of currentData) {
            counts[entry.occupation] += 1;
        }
        var ret = [{ "name": "Caregiver", "value": counts["Caregiver"], color: "#2a4d69" },
        { "name": "Health care worker", "value": counts["Health care worker"], color: "#4b86b4" },
        { "name": "Essential Worker", "value": counts["Essential Worker (first responders, teachers, food, construction...)"], color: "#adcbe3" },
        { "name": "Work from home", "value": counts["Work from home"], color: "#e7eff6" },
        { "name": "Student", "value": counts["Student"], color: "#63ace5" },
        { "name": "Other", "value": counts["Other"], color: "#63ace5" },
        ];

        setPieOccupationData(ret)
    }

    // Generate data for pie chart
    function getResidences(data) {
        var currentData = data
        var counts = {
            "Congregate living (Senior homes, apartments, etc.)": 0,
            "Town home": 0,
            "Single home": 0,
            "None of the above": 0,
        }
        for (let entry of currentData) {
            counts[entry.residence] += 1;
        }
        var ret = [{ "name": "Congregate living", "value": counts["Congregate living (Senior homes, apartments, etc.)"], color: "2a4d69" },
        { "name": "Town home", "value": counts["Town home"], color: "#4b86b4" },
        { "name": "Single home", "value": counts["Single home"], color: "#adcbe3" },
        { "name": "N/A", "value": counts["None of the above"], color: "#63ace5" },
        ];
        console.log("Reisdences is", ret)
        setResidenceData(ret)
    }


    // // Runs when the user loads the page      
    return (

        <div className="data-container">
            <div className="title-area">
                <h1 className="title">Data</h1>
            </div>
            <div className="text-area">
                <p className="text">
                    See how your results compare to everyone else's! Note that these graphs become more accurate as more people use our service, so get your friends to fill out the <Link to="/">form</Link> too!
                </p>
            </div>
            <div className="data-area">
                {/* Put the data here */}
                <br /><br />
                <h5 className="graph-title">Distribution of results – when are our users most likely to get vaccinated? </h5>
                <br />
                <div className="chart-container">
                    {allData && <LineChart data={histogramData} />}
                </div>
                <br /><br /><br />
                <div className="pie-chart-container">

                    <Container fluid>
                        <Row>
                            <Col md={6} lg={6}>
                                <h5 className="graph-title">Which sectors do our users work in? </h5>
                                <br />
                                {allData && <PieChart data={pieOccupationData} />}

                            </Col>

                            <Col md={6} lg={6}>
                                <h5 className="graph-title">What type of residence do our users live in? </h5>
                                <br />

                                {allData && <PieChart data={residenceData} />}
                            </Col>
                        </Row>

                    </Container>

                </div>

            </div>




        </div>
    );
}

export default Data;