import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header style={{"display":"flex"}}>
                    <img src="https://via.placeholder.com/350x150" alt="logo"/>
                    <h1 style={{"paddingLeft":"30px"}}>Jakis tytul</h1>
                </header>
            </div>
        )
    }
}
export default Header;