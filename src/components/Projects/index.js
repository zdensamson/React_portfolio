import React from 'react';

function Projects(props) {
    const projects = [
        {
            name: 'Cherp',
            description: 'Quick and easy ERP application',
            tech: [
                'mySQL2',
                'sequelize',
                'express',
                'express-session',
                'xlsx',
                'bcrypt'
            ],
            link: 'https://cherp-io.herokuapp.com/login',
            img: 'analytics.png'
        },
        {
            name: 'NoSQL API',
            description: 'Simple mocked BE for a social network application',
            tech: [
                'MongoDB',
                'Mongoose',
                'express'
            ],
            link: 'https://github.com/zdensamson/NoSQL-social-network-API',
            img: 'network.png'
        },
        {
            name: 'Food Junkies',
            description: 'Pass in an ingredient, we pass back recipes',
            tech: [
                'JavaScript',
                'jQuery',
                'Skeleton',
                'Third-party APIs'
            ],
            link: 'https://zdensamson.github.io/food_junkies/',
            img: 'cooking.png'
        },
        {
            name: 'E-commerce Back End',
            img: 'mobile-shopping.png'
        },
        {
            name: 'Password generator',
            img: 'password.png'
        },
        {
            name: 'Budget PWA',
            img: 'budgeting.png'
        }

    ];

    return (
        // <section className="container">
            <div className="row">
                    {projects.map((project) => (
                        <a className="row col-4 mx-auto proj-holder" href={project.link} key={project.name} target="_blank">
                            <div  className=" col-6 projCopy">
                                <span className="projTitle">{project.name}</span>
                                <span className="projTitle">______</span>
                                {project.description}
                            </div>
                            <div className="col-6 projImg-holder">
                                <img 
                                    src={require(`../../assets/images/${project.img}`).default} 
                                    alt=""
                                    className="projImg"
                                />
                            </div>
                        </a>
                    ))}
            </div>
        // </section>
    )
};

export default Projects;