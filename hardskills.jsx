import React from "react";
import "../Styles/hardskills.css";

export default function HardSkills() {
  return (
    <div className="hardskills">
      <h2>HardSkills</h2>

      <ul className="hardlist">
        <li>
          <img
            src="./jsLogo.png"
            alt="JS"
            className="js"
            width={"100px"}
            height={"100px"}
          />
          JavaScript
        </li>
        <li>
          <img
            src="./tsLogo.png"
            alt="TS"
            className="ts"
            width={"100px"}
            height={"100px"}
          />
          TypeScript
        </li>
        <li>
          <img
            src="./reactLogo.png"
            alt="REACT"
            className="react"
            width={"100px"}
            height={"100px"}
          />
          React.js
        </li>
        <li>
          <img
            src="./nodeLogo.png"
            alt="NODE"
            className="node"
            width={"100px"}
            height={"110px"}
          />
          Node.js
        </li>
        <li>
        <img
            src="./css-3.svg"
            alt="CSS"
            className="css"
            width={"100px"}
            height={"100px"}
          />
          CSS</li>
        <li>
          <img src="./figma.png" alt="Figma" className="figma" width={"100px"} height={"100px"} />
          Figma</li>
        <li>
          <img src="./UIUX-Design.svg" alt="UIUX" className="UIUX" width={"100px"} height={"100px"} />
          UX / UI</li>
      </ul>
    </div>
  );
}
