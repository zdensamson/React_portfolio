import React from 'react';

function About(props) {

    return (
        <section>
                <article className="zach">
                    <div className="bioCopy">
                        <h2>Meet me</h2>
                        <p>
                            Hello World. My Name is Zachary Samson-- you can call me Zach. I'm a southwest air dried student of wifi (millenial born in AZ). I have a bachelors in Supply Chain Management from Arizona State University, and I've worked in operations planning for 4 years. 
                        </p>
                        <p>
                            I'm currently enrolled in the University of Arizona's full stack web development bootcamp, and I will be graduating in November 2021. My intention is to take these new skills to land an entry level full stack software develpment job.
                        </p>
                    </div>
                    <div className="imgHolder">
                        <img src={require("../../assets/images/profile_pic.jpg").default} alt=""/>
                    </div>
                </article>
        </section>
    )
};

export default About;