import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RfhbgComponent from './RfhbgComponent'

const page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
            <RfhbgComponent />
            </main>
            <Footer />
        </div>
    )
}

export default page
