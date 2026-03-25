import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SelfemployedComponent from './SelfemployedComponent'

const page = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <Navbar />
            <main className="flex-grow">

                <SelfemployedComponent />
            </main>

            <Footer />
        </div>
    )
}

export default page