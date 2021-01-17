import { React, Component, useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom'; 

import  DoughnutChart  from '../components/donutChart.js'
import  LineChart  from '../components/lineChart.js'

import "../styles/data.css";

function Data() {
    
    // Data state
    const [allData, setAllData ] = useState(null);
    const [histogramData, setHistogramData] = useState([]);

    console.log(allData)
    useEffect(async () => {
        const fetchData = async () => {
            let response = await fetch('/api/getData')
            const data = await response.json()
            setAllData(data);
            generateHistogramData(data);

        }
        fetchData();
    
    }, []);

    function generateHistogramData(data)
    {
        console.log("Generate histogram data")
        if (data === null)
        {
            setHistogramData([])
            return 
        }
        console.log("currentData is", data)
        var currentData = data
        var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        
        for (let val of currentData)
        {
            var entry = val.month;
            if(entry == 'January'){
                counts[0] += 1
            }
            else if (entry == 'February')
            {
                counts[1] +=1 
            }
            else if (entry == 'March')
            {
                counts[2] += 1
            }
            else if (entry == 'April')
            {
                counts[3] += 1 
            }
            else if (entry == 'May')
            {
                counts[4] += 1
            }
            else if (entry == 'June')
            {
                counts[5] += 1 
            }
            else if (entry == 'July')
            {
                counts[6] += 1
            }
            else if (entry == 'August')
            {
                counts[7] += 1 
            }
            else if (entry == 'September')
            {
                counts[8] += 1
            }
            else if (entry == 'October')
            {
                counts[9] += 1
            }
            else if (entry == 'November')
            {
                counts[10] += 1 
            }
            else 
            {
                counts[11] += 1
            }
        }
        console.log("Counts is", counts)

        let ret = [
            {name:"January", value:counts[0]},
            {name:"February", value:counts[1]},
            {name:"March", value:counts[2]},
            {name:"April", value:counts[3]},
            {name:"May", value:counts[4]},
            {name:"June", value:counts[5]},
            {name:"July", value:counts[6]},
            {name:"August", value:counts[7]},
            {name:"September", value:counts[8]},
            {name:"October", value:counts[9]},
            {name:"November", value:counts[10]},
            {name:"December", value:counts[11]}
        ];
        console.log("Ret is", ret)
        setHistogramData(ret);
    }

    // Generate data for pie chart
    // function getOccupations() {
    //     for (let entry of allData)
    //     {

    //         if(entry.occupation == "" 
    //     }
    // }



    
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
                {allData && <LineChart data = {histogramData} /> }
            </div>


        </div>        
    );
}

export default Data;