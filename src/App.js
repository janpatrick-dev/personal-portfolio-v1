import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Experience from './Components/experience/Experience';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Personal from './Components/personal/Personal';
import Work from './Components/work/Work';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <About />
        <Experience />
        <Personal />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
