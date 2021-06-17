import  {useState} from 'react'
import './index.css'
import './component/Navbar'
import Navbar from './component/Navbar'
import GlobalStyle from './component/globalStyle';
import Dropdown from './component/Dropdown';
import Login from './component/login';




const App2 = () => {
    const[isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <GlobalStyle/>
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <Login/>     
        </>
    )
}

export default App2;

