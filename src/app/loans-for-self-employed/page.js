import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SelfemployedComponent from './SelfemployedComponent'

const page = () => {
    return (
        <div>
            <Navbar />

            <SelfemployedComponent />

            <Footer />
        </div>
    )
}

export default page