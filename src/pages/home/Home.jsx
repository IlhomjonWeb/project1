import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <Link to="/">Go to Contact Page</Link>
            <Link to="/contact">Go to Home Page</Link>
        </div>
    )
}

export default Home
