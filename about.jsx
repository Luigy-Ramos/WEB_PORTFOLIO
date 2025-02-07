import React from "react";
import "../Styles/about.css";

export default function About() {
  return (
    <div className="about">
      <div className="head">
      
        <img src="bytes4future.png" alt="Bytes4Future" width={"100px"} height={"100px"}/>
      
      <h2>About Me</h2>
      
        <img src="runcodeschool.png" alt="RunCodeSchool" width={"100px"} height={"100px"}/>
      
      </div>
      <div className="paragraph">
        <p>
          With 7 years as a military personnel in the Navy, I developed
          discipline, resilience, and leadership-skills I now apply in
          technology. My passion for computers, which began with gaming, evolved
          into programming. I completed the Junior Full Stack Developer course
          at Bytes4Future, with support from Run Code School, gaining skills in
          JavaScript, TypeScript, CSS, React.js, Node.js, and UX/UI. I am
          dedicated to both my career and family, seeking opportunities to grow
          in the tech field. I have participated in several volunteer
          initiatives, particularly during the Pedrógão Grande wildfires. Let's
          connect and explore how I can add value to your team!
        </p>
      </div>
    </div>
  );
}
