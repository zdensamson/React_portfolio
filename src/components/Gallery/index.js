import React from 'react';
import About from '../About';

function Gallery(props) {
    const { currentCategory } = props;
    return (
        <section>
            {currentCategory.title === 'me' && <About/>}

        </section>
    )
};

export default Gallery;