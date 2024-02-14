import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

function Header() {
  return (
    <>
        <div className='container'>
            <div className='header'>
                <Link to="/">
                Miner
                </Link>
                <Link to="/skins">
                    Skins
                </Link>
                <Link to="/boost">
                    Boost
                </Link>
            </div>
        </div>
    </>
  )
}

export default Header