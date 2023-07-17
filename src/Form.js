import React from "react";
import olx from '../src/pics/olx.png'
import { useHistory } from "react-router-dom";
import { useState } from "react";
const Forms = () => {

    const [title, setTiltle] = useState('');
    const [des, setDes] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');

    const submit = (e) => {
        e.preventDefault();
        const data = { title, des, brand, price, location, name };
        console.log(data);
        fetch('http://localhost:8000/data', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('Record Added');
            history.push('/');
        })
    }

    const history = useHistory();
    const back = (e) => {
        history.push('/categories')
    }
    const redirect = (e) => {
        history.push('/');
    }


    return (
        <form onSubmit={submit} className="form" action="">
            <nav className="nav">
                <span><i onClick={back} className="fa-solid fa-arrow-left-long"></i></span>
                <img onClick={redirect} className="logo" src={olx} alt="olx logo" />
            </nav>
            <h3 className="add ">POST YOUR  AD</h3>
            <div className="container2 b">
                <h3 className="c">SELECTED CATEGORY</h3>
                <h3 className="c">INCLUDE SOME DETAILS</h3>
                <label className="c" >Ad Title</label> <br />
                <input value={title} onChange={(e) => setTiltle(e.target.value)} type="text" className="a" name="" id="" /> <br />
                <span className="s1">*Mention the key features of your item </span> <br />
                <label htmlFor="" className="c">Description</label> <br />
                <input value={des} onChange={(e) => setDes(e.target.value)} type="text" className="a" name="" id="" /> <br />
                <span className="s1">*Include condition, features and reason for selling</span> <br />
                <label htmlFor="" className="c">Brand</label> <br />
                <input type="text" className="a" value={brand} onChange={(e) => setBrand(e.target.value)} /> <br />
            </div>

            <div className="container2 ">
                <h3 className="c">SET A PRICE</h3> <br />
                <label htmlFor="" className="c">Price</label> <br />
                <input type="text" className="a " value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Rs |" /> <br />


                <h3 className="c">YOUR AD'S LOCATION</h3> <br />
                <label htmlFor="" className="c">Location</label> <br />

                <select className="a" value={location} onChange={(e) => setLocation(e.target.value)}>
                    <option selected hidden></option>
                    <option >Lahore,Pakistan</option>
                    <option >Karachi,Pakistan</option>
                    <option >Multan,Pakistan</option>
                    <option >Faislabad,Pakistan</option>
                    <option >Peshawar,Pakistan</option>
                </select>

                {/* <input type="text" className="a" value={location} onChange={(e) => setLocation(e.target.value)} /> <br /> */}


                <h3 className="c">REVIEW YOUR DETAILS</h3> <br />
                <label htmlFor="" className="c">Name</label> <br />
                <input type="text" className="a" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                <button className="c button">Post Now</button>
            </div>
        </form>
    );
}

export default Forms;