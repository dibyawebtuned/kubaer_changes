import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FhogComponent from './FhogComponent'

const page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
            <FhogComponent />
            </main>
            <Footer />
        </div>
    )
}

export default page
