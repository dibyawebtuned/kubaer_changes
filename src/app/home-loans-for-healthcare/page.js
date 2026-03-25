import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomeloansComponent from './HomeloansComponent'

const page = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <Navbar />
            <main className="flex-grow">

                <HomeloansComponent />
            </main>

            <Footer />
        </div>
    )
}

export default page
