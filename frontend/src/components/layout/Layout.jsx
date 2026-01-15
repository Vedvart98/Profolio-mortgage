import React from 'react'
import Header from './Header'
import Footer from './Footer'
import TopHeader from './TopHeader'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader/>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout