
import NavBar from './components/NAVBAR';
import AboutUs from './components/About';
import Services from './components/Services';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Differentiators from './components/Differentiators';
import Technology from './components/Technology';
import Support from './components/Support';
import Reference from './components/Refernces'
import Footer from './components/Footer';
export default function HomePage() {
    return (
        <div>
            <NavBar />
            <Header/>
            <AboutUs/>
            <Services/>
            <Portfolio/>
            <Projects/>
            <Differentiators/>
            <Technology/>
            <Support/>
            <Reference/>
            <Footer/>
    

        </div>
    );
}
