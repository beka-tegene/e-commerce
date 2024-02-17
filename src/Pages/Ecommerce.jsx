import React from 'react'
import NavBar from '../Components/Nav/NavBar'
import Advertisement from '../Components/Advertisement/Advertisement'
import Category from '../Components/Catagory/Catagory'
import HotDeals from '../Components/HotDeal/HotDeals'
import Card from '../Components/Card/Card'

const Ecommerce = () => {
  return (
    <>
        <NavBar />
        <Advertisement />
        <Category />
        <HotDeals />
        <Card />
    </>
  )
}

export default Ecommerce