import React from "react";
import ad from '../src/pics/ad.png';
import olx from '../src/pics/olx.png';
import mobile from '../src/pics/kk.png'

import logos from '../src/pics/logos.png'
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


const Load = () => {

    const history = useHistory();
    const [data, setData] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:8000/data')
            .then(response => {
                return response.json()
            })
            .then(data => {

                console.log(data)

                setData(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const back = (e) => {
        history.push('/')
    }

    return (
        <div>
            <nav className="navbar">

                <img onClick={back} className="logob" src={olx} alt="" />
                <img className="logos" src={logos} alt="" />
                <input className="search2" type="text" placeholder="Pakistan" />
                <input className="search" type="text" placeholder="Find Mobile Phones,Cars and more.." />

            </nav>
            < img className="ad" src={ad} alt="" /> <br />


            {data.length > 0 && (data.map(data => (
                <div className="cards">

                    <img className="imgg" src={mobile} alt="Avatar" /> <br />
                    <span className="card"> <b>{data.title} </b></span> <br />
                    <span className="card"> {data.des}</span> <br />
                    <span className="card"> <b> Rs. {data.price}</b></span> <br />
                    <span className="card">{data.location}</span> <br />

                </div>

            )))}

        </div>
    );
}

export default Load;