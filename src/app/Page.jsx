import CallToAction from "../sections/CallToAction"
import ContactForm from "../sections/ContactForm"
import Footer from "../sections/Footer"
import Header from "../sections/Header"
import Hero from "../sections/Hero"
import LogoTicker from "../sections/LogoTicker"
import Pricing from "../sections/Pricing"
import ProductShowcase from "../sections/ProductShowcase"
import Testimonials from "../sections/Testimonials"
import { ToastContainer } from "react-toastify";
import Subscribe from "../sections/Subscribe"
import "react-toastify/dist/ReactToastify.css";
const Page = () => {
  return (
    <div className="min-h-screen">
      <Header/>
      <Hero/>
      <LogoTicker/>
      <ProductShowcase/>
      <Pricing/>
      <Testimonials/>
      <CallToAction/>
      <ContactForm/>
      <Subscribe/>
      <Footer/>
       <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default Page
