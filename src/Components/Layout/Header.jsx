import React from 'react'
import { Link } from 'react-router-dom'
import '../../Sass/Components/header.scss'

export function Header() {
  return (
    <div className='container'>
      <p className='name'>Catriel Nanthaveth</p>

      <ul className='links-to'>
        <li className='link'><Link to='/'>Home</Link></li>
        <li className='link'><Link to='/about'>About Me</Link></li>
        <li className='link'><Link to='/contact'>Contact</Link></li>
        <li className='link'><Link to='/projects'>Projects</Link></li>
        <li className='link'><Link to='/login'>Login</Link></li>
      </ul>

    </div>
  )
}
