import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutComponent from "./AboutComponent";

export default function Blog() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Content Starts */}
            <main className="flex-grow">
                <AboutComponent />
            </main>
            {/* Content Ends */}

            <Footer />
        </div>
    );
}
