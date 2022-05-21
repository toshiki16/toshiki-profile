import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Header from './Header'
import App_list from './App-list'
import Mymind from './Mymind'
import Favorite from './Favorite'
import Button_ten from './button-ten'
import Navibar from './navibar'
import First_view from './First-view'


const App = () => {
  return (
    <BrowserRouter>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route exact path='/' element={<First_view />} />
        <Route exact path='/About' element={<Favorite />} />
        <Route exact path='/Achievement' element={<Navibar />} />
        <Route exact path='/Service' element={<Header />} />
        <Route exact path='/Contact' element={<Button_ten />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App




    // <>
    //   <Navibar />
    //   <Header />
    //   <App_list />
    //   <Mymind />
    //   <Favorite />
    //   <Button_ten />
    //   <BrowserRouter>
    //     <h1>Hello React Router</h1>
    //     <Routes path="/">
    //       {/* <Home /> */}
    //     </Routes>
    //     <Routes path="/about">
    //       {/* <About /> */}
    //     </Routes>
    //     <Routes path="/contact">
    //       {/* <Contact /> */}
    //     </Routes>
    //   </BrowserRouter>
    // </>
