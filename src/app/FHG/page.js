import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FhgComponent from './FhgComponent'

const page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
            <FhgComponent />
            </main>
            <Footer />
        </div>
    )
}

export default page
