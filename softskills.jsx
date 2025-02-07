import React from "react";
import "../Styles/softskills.css";

export default function SoftSkills() {
    return (
        <div className="softskills">
            <h2>Soft Skills</h2>
            <ul className="softlist">
                <li className="float"><img
            src="./projectManagement.png"
            alt="PM"
            className="pm"
            width={"100px"}
            height={"100px"}
          />Project Management</li>
                <li className="float"><img
            src="./conflictManagement.png"
            alt="CM"
            className="cm"
            width={"100px"}
            height={"100px"}
          />Conflict Management</li>
                <li className="float"><img
            src="./Motivated.png"
            alt="Motivated"
            className="motivated"
            width={"100px"}
            height={"100px"}
          />Motivated</li>
                <li className="float"><img
            src="./Focus.png"
            alt="Focus"
            className="focus"
            width={"100px"}
            height={"100px"}
          />Focused</li>
                <li className="float"><img
            src="./hardWork.png"
            alt="HW"
            className="hw"
            width={"100px"}
            height={"100px"}
          />Hardworking</li>  
            </ul>
        </div>
    );
}