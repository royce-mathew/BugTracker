import React from "react";

function About() {
    return (<div className="aboutUsContainer">

        <div className="aboutUsHeader">
            <h1>About Us</h1>
        </div>

        <div className="aboutUsContent">
            <div className="column">
                <h2>Royce Mathew</h2>
                <h3>{"<Year 2 Computer Science Student>"}</h3>
                <p>Hey! My name is Royce Mathew and I'm in my second year of the Computer Science
                    Program. I love expanding my knowledge by applying myself in different areas of computer science
                    and pushing the boundaries of my knowledge. 
                </p>
            </div>

            <div className="column">
                <h2>Srivathsan Sivakumar</h2>
                <h3>{"<Year 2 Computer Science Student>"}</h3>
                <p>Hello Everyone! I'm a second year Computer Science student at OTU and I enjoy learning new frameworks
                    and technologies!</p>
            </div>

            <div className="column">
                <h2>Aaveg Shangari</h2>
                <h3>{"<Year 2 Computer Science Student>"}</h3>
                <p>Hi there! My name is Aaveg Shangari and I'm in the second year of the Computer Science program.
                    I enjoy working on applications, and tend to follow that enjoyment in my free time.
                </p>
            </div>
            
        </div>

    </div>
        
    )
}

export default About;