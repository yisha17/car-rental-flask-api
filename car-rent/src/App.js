import  {useState} from 'react'
import './index.css'
import './component/Navbar'
import Navbar from './component/Navbar'
import GlobalStyle from './component/globalStyle';
import Intro from './component/Intro';
import { IntroData } from './component/introData';
import Dropdown from './component/Dropdown';
import Info from './component/Info'
import Footer from './component/Footer';
import { InfoData } from './component/infoData';
function App() {
  const[isOpen,setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Intro slides={IntroData}/>
      <Info {...InfoData}
      />
      <Footer/>
    </>
  );
}

export default App;
