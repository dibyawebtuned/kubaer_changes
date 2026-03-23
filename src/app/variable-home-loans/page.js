import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VariablehomeComponent from './VariablehomeComponent'

const page = () => {
    return (
        <div>
            <Navbar />
            <VariablehomeComponent />
            <Footer />
        </div>
    )
}

export default page