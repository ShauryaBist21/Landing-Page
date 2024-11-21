import NavBar from './components/NAVBAR';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Differentiators from './Diffrentiator';
import Technology from './Technology';
import Support from './support';
import Reference from './components/references';
import Footer from './components/footer';

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <Header />
            <AboutUs />
            <Services />
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
