import React from 'react';
import About from '../About';
import Projects from '../Projects';

function Gallery(props) {
    const { currentCategory } = props;
    return (
        <section>
            {currentCategory.title === 'me' && <About/>}
            {currentCategory.title === 'my_code' && <Projects/>}

        </section>
    )
};

export default Gallery;