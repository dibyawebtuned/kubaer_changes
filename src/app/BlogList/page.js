import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogComponent from "./BlogComponent";

export default function Blog() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Content Starts */}
            <main className="flex-grow">
                <BlogComponent />
            </main>
            {/* Content Ends */}

            <Footer />
        </div>
    );
}
