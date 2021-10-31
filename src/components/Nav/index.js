import React from 'react';

function Nav(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props;

    return (
        <header className="container">
            <div className="row">
                <h1 className="col-3 mx-auto">ZS</h1>
                <div className="col-9 mx-auto">
                    <ul className="row">
                        {categories.map((category) => (
                            <li
                                className={`col-lg-3 col-md-2 col-sm-1 mx-auto`}
                                key={category.title}
                            >
                                <span className={`${currentCategory.title === category.title && 'navActive'}`} 
                                onClick={() => {
                                    setCurrentCategory(category)
                                    console.log(currentCategory.title)
                                }}>
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