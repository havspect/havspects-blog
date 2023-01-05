import * as React from 'react'
import Footer from './footer'
import Navbar from './navbar'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
        <header>
            <Navbar></Navbar>
        </header>
        <main className='max-w-2xl mx-auto pt-24 px-4'>
            {children}
        </main>
        <Footer></Footer>
    </div>
  )
}

export default Layout