import React from 'react'
import { Link } from 'react-scroll'

function Header() {
    return (
        <div id='main'>
            <div className="header-heading">
                <h3>It's a Great Time for a Burger</h3>
                <h1>THE <span>BURGER</span><br/>HOUSE</h1>
                <p className="details">Life's too short for boring food. Taste the difference.</p>
                <div className="header-btns">
                    <Link className='header-btn' to='products' smooth={true} duration={2000}>Menu</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
