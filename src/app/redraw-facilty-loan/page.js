import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RedrawComponent from './RedrawComponent'

const page = () => {
    return (
        <div>
            <Navbar />
            <RedrawComponent />
            <Footer />
        </div>
    )
}

export default page