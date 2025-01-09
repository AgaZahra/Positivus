import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <React.Fragment>
            <Header />
              <Outlet />
            <Footer />

        </React.Fragment>
    )
}

export default Layout