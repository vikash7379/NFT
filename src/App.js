import { ThemeProvider } from "styled-components";
import Navbar from "./component/Navbar";
import GlobleStyle from "./styles/GlobleStyle";
import {light,dark} from './styles/Theme'
import Home from './component/Home';
import About from './component/About';
import Roadmap from  './component/Roadmap';
import Showcase  from './component/Showcase';
import Team from './component/Team';
import Faq from './component/Faq';
import Footer from './component/Footer'
import ScrollToTop from "./styles/ScrollToTop";

function App() {
  
  return (
    <>
      <GlobleStyle/>
      <ThemeProvider theme = {light}>
         <Navbar/>
         <Home/>
         <About/>
         <Roadmap/>
         <Showcase/>
         <Team/>
         <Faq/>
         <Footer/>
         <ScrollToTop/>
      </ThemeProvider>
    </>
  );
}

export default App;
