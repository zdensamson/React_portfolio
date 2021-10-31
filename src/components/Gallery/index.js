import React from 'react';
import About from '../About';
import Projects from '../Projects';
import Resume from '../Resume';

function Gallery(props) {
    const { currentCategory } = props;
    return (
        <section className="container">
            {currentCategory.title === 'me' && <About/>}
            {currentCategory.title === 'my_code' && <Projects/>}
            {currentCategory.title === 'resume' && <Resume/>}

        </section>
    )
};

export default Gallery;