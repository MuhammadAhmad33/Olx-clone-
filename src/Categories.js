import olx from '../src/pics/olx.png'
import React from "react";
import { useHistory } from "react-router-dom";
const Categories = () => {
    const history = useHistory();

    const click = (e) => {
        history.push('/form')
    }
    const back = (e) => {
        history.push('/')
    }
    const redirect = (e) => {
        history.push('/');
    }
    return (
        <div className="container">
            <nav className="nav">
                <i onClick={back} className="fa-solid fa-arrow-left-long"></i>
                <img onClick={redirect} className="logo" src={olx} alt="olx logo" />
            </nav>
            <label ><h3 className="h3">Select Category</h3></label>
            <li onClick={click} className="li">Mobile Phones</li>
            <li onClick={click} className="li">Cars</li>
            <li onClick={click} className="li">Cats</li>
        </div>
    );
}

export default Categories;