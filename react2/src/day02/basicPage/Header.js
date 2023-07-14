import React from 'react';

function Header(props) {
    return (
        <div className="p-5 bg-primary text-white text-center">
            <h1>{props.title}</h1>
            <p>Resize this responsive page to see the effect!</p>
        </div>
    )
}

export default Header;