import * as React from 'react';


const Header = () => {
    return (
        <header className="header">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">David&nbsp;Luque</span>
                    <span className="heading-primary--sub">Full stack web developer</span>
                </h1>
            </div>
            <div className="header__line"></div>
        </header>
    );
};

export default Header;