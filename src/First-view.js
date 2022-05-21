import React from 'react'
import Header from './Header'
import App_list from './App-list'
import Mymind from './Mymind'
import Favorite from './Favorite'
import Button_ten from './button-ten'
import Navibar from './navibar'


const First_view = () => {
  return (
    <>
      <Navibar />
      <Header />
      <App_list />
      <Mymind />
      <Favorite />
      <Button_ten />
    </>
  )
}

export default First_view
