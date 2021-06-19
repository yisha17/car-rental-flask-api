import React from 'react'
import App from './component/menu/App'
import AvailableCars from './component/menu/AvailableCars'
import GlobalStyle from './component/globalStyle'
import Navbar from './component/Navbar'
import './component/menu/index.css'


const App4 = () => {
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <AvailableCars/>
            <App/>
        </>
    )
}

export default App4
