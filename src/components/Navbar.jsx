import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Navbar = () => {

    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    // addevent listener
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        }
        else {
            setHeaderFixed(false)
        }
    })

    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
            {/* header social */}
            <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
                <div className="container">
                    <div className='header-top-area'>
                        <Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </div>
            {/* header menu */}
            <div className='header-bottom'>
                <div className='container'>
                    <div className='row flex-row'>
                        {/* logo */}
                        <div className="logo-area col-lg-3 col-md-3 col-xs-12 col-sm-12">
                            <div className='logo'>
                                <Link to={"/"}>
                                    <img src={logo} alt="" className='logo-img' />
                                </Link>
                                <h2>AppFellas Flight</h2>
                            </div>
                        </div>
                        <div className="menu-area col-lg-9 col-md-9 col-xs-12 col-sm-12">
                            <div className="menu">
                                <ul className={`menu-ul ${menuToggle ? "active" : ""}`}>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/deals">Deals</Link></li>
                                    <li><Link to="/flight">Flight</Link></li>
                                    <li><Link to="/discover">Discover</Link></li>
                                    <li><Link to="/profile">İpek Coşkun</Link></li>
                                </ul>
                            </div>
                            <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Navbar