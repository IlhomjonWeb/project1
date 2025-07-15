import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../../src/pages/contact/Contact';
import FinanceTools from '../pages/financetools/FinanceTools';
import Programs from '../../src/pages/programs/Programs';
import '../../src/assets/css/navbar.scss'
import Logo from '../assets/svg/Logo';
import Arrow from '../assets/svg/Arrow';
import Button from './Button';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="inner_navbar">
                <Logo />
                <div className="nav-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/programs">programs</Link><Arrow />
                            <ul className="dropdown">
                                <li><Link to="">International educational programs</Link></li>
                                <li><Link to="">Specialized courses</Link></li>
                                {/* {/* <li><Link to="">Islamic Finance Literacy Course</Link></li> */}
                                <li><Link to="">Certification program</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/finance-tools">finance tools</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>
                </div>
                <div className="national-languages">
                    <select>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="es">Spanish</option>
                        <option value="uz">Uzbekistan</option>
                    </select>
                    <Button text='sign in' />
                </div>
            </div>

        </div>
    )
}

export default Navbar
