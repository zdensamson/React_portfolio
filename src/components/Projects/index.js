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
            link: 'https://cherp-io.herokuapp.com/login'
        },
        {
            name: 'NoSQL Social Network API',
            description: 'Simple mocked BE for a social network application',
            tech: [
                'MongoDB',
                'Mongoose',
                'express'
            ],
            link: 'https://github.com/zdensamson/NoSQL-social-network-API'
        },
        {
            name: 'Food Junkiez'
        },
        {
            name: 'E-commerce Back End'
        },
        {
            name: 'Password generator'
        },
        {
            name: 'Team profile generator'
        }

    ];

    return (
        <section>
            Projects
        </section>
    )
};

export default Projects;