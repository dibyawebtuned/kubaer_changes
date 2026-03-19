
//ContactPage.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactComponent from "./ContactComponent";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            {/* Content Starts */}
            <main className="flex-grow">
                <ContactComponent />
            </main>
            {/* Content Ends */}

            <Footer />
        </div>
    );
}
