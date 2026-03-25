import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PrincipalComponent from './PrincipalComponent'

const page = () => {
    return (
                <div className="flex flex-col min-h-screen">

            <Navbar />
            <main className="flex-grow">

            <PrincipalComponent />
            </main>

            <Footer />
        </div>
    )
}

export default page