import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import BridgingComponent from './BridgingComponent';

const page = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <BridgingComponent />
            <Footer />
        </div>
    )
}

export default page
