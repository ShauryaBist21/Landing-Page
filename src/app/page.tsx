
import NavBar from './components/NAVBAR';
import Hero from './components/Hero';
import Frame from './components/Frame';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
export default function HomePage() {
    return (
        <div>
            <NavBar />
            <Hero/>
            <Frame/>
            <Testimonial/>
            <Footer/>
        </div>
    );
}