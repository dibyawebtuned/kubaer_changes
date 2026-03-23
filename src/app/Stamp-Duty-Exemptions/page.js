import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StampdutyComponent from './StampdutyComponent'

const page = () => {
    return (
        <div>
            <Navbar />
            <StampdutyComponent />
            <Footer />
        </div>
    )
}

export default page