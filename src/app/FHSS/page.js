import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FhssComponent from './FhssComponent'

const page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
            <FhssComponent />
            </main>
            <Footer />
        </div>
    )
}

export default page
