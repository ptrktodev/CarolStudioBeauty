import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Servicos from "./components/Servicos/Servicos";
import About from "./components/About/About";
import Marcas from "./components/Marcas/Marcas";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <Main />
            <Servicos />
            <About />
            <Marcas />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
