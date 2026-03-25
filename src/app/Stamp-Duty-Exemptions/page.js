import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StampdutyComponent from './StampdutyComponent'

const page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main content grows to fill space */}
            <main className="flex-grow">
                <StampdutyComponent />
            </main>

            {/* Footer sticks at the bottom */}
            <Footer />
        </div>
    )
}

export default page