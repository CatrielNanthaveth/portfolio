import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout(props) {
  return (
    <>
        <Header />
        {props.children}
        <Footer />
    </>
  )
}
