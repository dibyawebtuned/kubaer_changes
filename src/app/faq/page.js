import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqComponent from "./FaqComponent";

export default function Faq() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Content Starts */}
            <main className="flex-grow">
                <FaqComponent />
            </main>
            {/* Content Ends */}

            <Footer />
        </div>
    );
}
