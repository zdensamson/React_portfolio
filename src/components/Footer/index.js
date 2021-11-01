import React from 'react';

function Footer(props) {

    return (
        <footer className="row form-group">
            <p className="col-4">
                &copy; Zachary Samson 2021
            </p>
            <div className="col-4">
                <a  href='https://github.com/zdensamson' target="_blank">
                    <img src={require("../../assets/images/GitHub_Logo.png").default} alt=""></img>
                </a>
            </div>
            <div className="attribution col-4 float-right">
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                <div>Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </footer>
    )
};

export default Footer;