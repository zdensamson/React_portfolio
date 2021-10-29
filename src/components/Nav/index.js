import React from 'react';

function Nav(props) {
    const {
        categories = []
    } = props;

    return (
        <header className="container">
            <div className="row">
                <h1 className="col-4">ZS</h1>
                <div className="col-8">
                    <ul className="row">
                        {categories.map((category) => (
                            <li
                                className="col"
                                key={category.title}
                            >
                                <span>
                                    {category.title}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
};

export default Nav;