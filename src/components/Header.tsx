import './Header.css'
import { useState } from 'react'

export const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className="headerContainer">
            <div className="menu">

                <div className="logo">
                    <img src='./logo.svg' alt='logo' />
                </div>

                <div className={`menuOptions ${openMenu ? 'active' : ''}`}>
                    <ul>
                        <li className="option">About</li>
                        <li className="option">Careers</li>
                        <li className="option">Events</li>
                        <li className="option">Products</li>
                        <li className="option">Support</li>
                    </ul>
                </div>


                <div className="menuBar" >
                    <i className={`fa-solid ${openMenu ? 'fa-x' : 'fa-bars'}`} onClick={handleOpenMenu}></i>
                </div>

            </div>

            <div className="text">
                <div className="mainText">
                    <h1>Immersive experiences that deliver</h1>
                </div>
            </div>
        </div>
    )
}
