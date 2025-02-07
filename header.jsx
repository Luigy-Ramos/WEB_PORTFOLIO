import React from "react";
import '../Styles/header.css';

export default function Header() {
    return (
        <div className="header">
            <img src="./rosto.jpg" alt="Rosto" className="rosto" width="190px" height="250px" />
            <div className="text">
            <h1>Luís Ramos</h1>
            <h3>Júnior Full-Stack Developer</h3>
            <h5>JavaScript | CSS | React.js | Node.js</h5>
            </div>
        </div>
    );
}