import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import '../../Sass/Components/header.scss'

export function Layout(props) {
  return (
    <>
        <Header />
        <div className='children-prop'>
          {props.children}
        </div>
        <Footer />
    </>
  )
}
