import * as React from 'react'
import Navbar from './navbar'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
        <header>
            <Navbar></Navbar>
        </header>
        <main className='max-w-2xl mx-auto pt-24 px-4'>
            <h1 className='text-xl font-bold'>{pageTitle}</h1>
            {children}
        </main>
    </div>
  )
}

export default Layout