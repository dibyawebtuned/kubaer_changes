import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SplitloanComponent from './SplitloanComponent'

const page = () => {
    return (
        <div>
            <Navbar />
            <SplitloanComponent />
            <Footer />
        </div>
    )
}

export default page