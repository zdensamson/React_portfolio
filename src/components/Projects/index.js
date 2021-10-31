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
            description: 'mySQL2 model, Sequelize queries, & express API endpoints',
            link: 'https://github.com/zdensamson/E-commerce_BE',
            img: 'mobile-shopping.png'
        },
        {
            name: 'Password generator',
            description: 'Choose character types & length, and let my algorithm do the rest.',
            img: 'password.png',
            link:'https://github.com/zdensamson/Password_generator'
        },
        {
            name: 'Budget PWA',
            description: 'Track your budget online or offline',
            img: 'budgeting.png',
            link: 'https://github.com/zdensamson/Password_generator'
        }

    ];

    return (
        // <section className="container">
            <div className="row">
                    {projects.map((project) => (
                        <a className="row col-lg-4 col-md-2 col-sm-1 mx-auto proj-holder" href={project.link} key={project.name} target="_blank">
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