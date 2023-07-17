import React from "react";
import ad from '../src/pics/ad.png';
import olx from '../src/pics/olx.png';
import mobile from '../src/pics/ii.png';
import sell from '../src/pics/sell.png';
import logos from '../src/pics/logos.png';
// import icons from '../src/pics/icons.png';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


const Home = () => {

    const history = useHistory();
    const [data, setData] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:9000/data')
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
        history.push('/categories')
    }

    const load = (e) => {
        history.push('/loadmore')
    }

    return (
        <div>
            <nav className="navbar">
                <img className="logob" src={olx} alt="" />
                <img className="logos" src={logos} alt="" />
                <input className="search2" type="text" placeholder="Pakistan" />
                <input className="search" type="text" placeholder="Find Mobile Phones,Cars and more.." />
                {/* <img src={icons} alt="" /> */}

                <div className="filter">
                    <span><b> All Categories </b></span>
                    <span>Mobiles</span>
                    <span> Cars</span>
                    <span>Cats</span>
                </div>


                <img className="sell" onClick={back} src={sell} alt="" />
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
            <button onClick={load} className="c button b">Load more</button>
        </div>

    );
}

export default Home;