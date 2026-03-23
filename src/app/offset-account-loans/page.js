import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import OffsetaccountComponent from './OffsetaccountComponent'

const page = () => {
    return (
        <div>
            <Navbar />

            <OffsetaccountComponent />

            <Footer />
        </div>
    )
}

export default page