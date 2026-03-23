import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomeloansComponent from './HomeloansComponent'

const page = () => {
    return (
        <div>
            <Navbar />
            <HomeloansComponent />
            <Footer />
        </div>
    )
}

export default page
