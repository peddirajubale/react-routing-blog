import {Link} from 'react-router-dom'
import './index.css'

const Header = ()=>{
    return(
        <nav className="nav-container">
            <div className="logo-and-title-container">
            <img
                alt="wave"
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            />
            <h1 className="title">Wave</h1>
            </div>
            <ul className="nav-item-list">

                <li className="link-item">
                    <Link to="/" className='route-link'>Home</Link>
                </li>
            
                <li className="link-item">
                <Link to="/about" className='route-link'>About</Link>
                </li>

                <li className="link-item">
                <Link to="/contact" className='route-link'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Header