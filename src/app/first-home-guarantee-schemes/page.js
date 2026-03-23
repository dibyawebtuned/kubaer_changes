import React from 'react'
import FirsthomeComponent from './FirsthomeComponent'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <div>
            <Navbar />

            <FirsthomeComponent />

            <Footer />
        </div>
    )
}

export default page
