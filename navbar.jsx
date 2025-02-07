import React from "react";
import { Link } from "react-router-dom"; // Importa o Link
import '../Styles/navbar.css';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="part1">
            <b><Link to="/">Home</Link></b>
            <b><Link to="/about">About Me</Link></b>
            <b><Link to="/hard-skills">HardSkills</Link></b>
            </div>
            <img src="./LRlogo.png" className="logo" alt="logo" width="100px" height="100px"/>
            <div className="part2">
            <b><Link to="/soft-skills">SoftSkills</Link></b>
            <b><Link to="/projects">Projects</Link></b>
            <b><Link to="/contact">Contact</Link></b>
            </div>
        </div>
    );
}
