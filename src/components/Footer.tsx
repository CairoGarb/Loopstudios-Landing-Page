import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">

                <div className="logoFooter">
                    <img src='./logo.svg' alt='logo' />
                </div>

                <div className="optionsFooter">
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div className="socialMedia">

                    <div className="face">
                        <i className="fa-brands fa-square-facebook"></i>
                    </div>

                    <div className="twitter">
                        <i className="fa-brands fa-twitter"></i>
                    </div>

                    <div className="pinterest">
                        <i className='fa-brands fa-pinterest'></i>
                    </div>

                    <div className="instagram">
                        <i className='fa-brands fa-instagram'></i>
                    </div>

                </div>

                <div className="copy">
                    <span>&copy; 2021 Loopstudios. All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}
