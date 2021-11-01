import React from 'react';

function About(props) {

    return (
        <section>
                <article className="zach container">
                    <div className="row">
                        <div className="bioCopy col-6 mx-auto">
                            <h2 className="header-text">Meet me</h2>
                            <p className="p-text">
                                Hello World. My Name is Zachary Samson-- you can call me Zach. I'm a southwest air dried student of wifi (millenial born in AZ). I have a bachelors in Supply Chain Management from Arizona State University, and I've worked in operations planning for 4 years. 
                            </p>
                            <p className="p-text">
                                I'm currently enrolled in the University of Arizona's full stack web development bootcamp, and I will be graduating in November 2021. My intention is to take these new skills to land an entry level full stack software develpment job.
                            </p>
                        </div>
                        <div className="imgHolder col-6 mx-auto">
                            <img src={require("../../assets/images/profile_pic.jpg").default} alt=""/>
                        </div>
                    </div>
                </article>
        </section>
    )
};

export default About;