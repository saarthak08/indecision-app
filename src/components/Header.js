import React from 'react';

const Header = (props) => (
    <div id='header'>
        <h1 id='headerTitle'>{props.title}</h1>
        {props.subtitle && <h2 id='headerSubtitle'>{props.subtitle}</h2>}
    </div>
);

Header.defaultProps = {
    title: 'Default Title'
}

export default Header;