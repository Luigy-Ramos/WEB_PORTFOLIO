import React from "react";
import '../Styles/contacts.css';

export default function Contacts() {
    return (
        <div className="contacts">
            <h2>Contacts</h2>
            <p>Please don't hesitate to contact me!</p>
            <ul className="contactlist">
                <li><a href="https://github.com/Luigy-Ramos"><img src="GitHub Logo.png" alt="GitHub" className="github" width={"100px"} height={"100px"}/></a>GitHub</li>
                <li><img src="WhatsApp Logo.png" alt="WhatsApp" className="whatsapp" width={"100px"} height={"100px"}/>+351 915 522 604</li>{/*WhatsApp*/}
                <li><a href="https://www.linkedin.com/in/luigy-ramos-1b4b1b1b4"><img src="linkedin.png" alt="LinkedIn" className="linkedin" width={"100px"} height={"100px"}/></a>LinkedIn</li>
                <li><img src="Mail Logo.png" alt="Mail" className="mail" width={"190px"} height={"100px"}/>raminhos_MK1@icloud.com</li>
            </ul>
        </div>
    );
}