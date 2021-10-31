import React from 'react';

function Resume(props) {
    const skills = [
        'JavaScript',
        'Node',
        'mySQL',
        'Sequelize',
        'Express',
        'MongoDB',
        'Mongoose',
        'React',
        'Handlebars.JS',
        'Bootstrap',
        'jQuery',
        'Google API library'

    ]
    return (
        <section className="container">
            <h1>Technologies I have experience with:</h1>
            <div className="row">
            {skills.map((skill) => (
                <div className={`col-lg-3 col-md-2 col-sm-1 mx-auto`} key={skill}>
                    {skill}    
                </div>
            ))}
            </div>                     
            <h1>CV</h1>
            <a href={`${process.env.PUBLIC_URL}/files/Zach-Samson-Resume.pdf`} target='_blank' download="Samson_resume.pdf">Download my resume</a>
        </section>
    )
};

export default Resume;