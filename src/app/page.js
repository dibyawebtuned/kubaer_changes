import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesSection from "@/app/about/AboutSection.js";
import HowWeWork from "@/app/work/page";
import Awards from "@/components/Awards";
import WhyChooseUs from "@/app/why/page";
import Testimonials from "@/components/Testimonials";
import Message from "@/app/message/page";
import Feedback from "@/components/Feedback";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Content Starts */}
      <main className="grow">
        <Hero />
        <ServicesSection />
        <HowWeWork />
        <Awards />
        <WhyChooseUs />
        <Testimonials />
        <Message />
        <Feedback />
      </main>
      {/* Content Ends */}

      <Footer />
    </div>
  );
}
