import React from 'react';

function Nav(props) {
    const {
        categories = []
    } = props;

    return (
        <header>
            <ul>
                {categories.map((category) => (
                    <li
                        key={category.title}
                    >
                        <span>
                            {category.title}
                        </span>
                    </li>
                ))}
            </ul>
        </header>
    )
};

export default Nav;