import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FixedrateComponent from './FixedrateComponent'

const page = () => {
    return (
        <div>
            <Navbar />

            <FixedrateComponent />

            <Footer />
        </div>
    )
}

export default page
