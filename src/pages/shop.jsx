import React from 'react'
import Hero from './Hero'
import Popular from '../Popular/Popular'
import Offers from '../offers/Offers'
import NewCollection from '../NewCollection/NewCollection'
import NewsLetter from '../NewsLetter/NewsLetter'

function shop() {
  return (
    <>
    <div >
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
    </div>
    </>
  )
}

export default shop;