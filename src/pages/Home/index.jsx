import React from 'react'
import Landing from '../../components/Landing'
import Highlights from '../../components/Highlights'
import Categories from '../../components/Categories'
import Bio from '../../components/Bio'
import Teleshopping from '../../components/Teleshopping'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div>
      <Landing />
      <Highlights />
      <Categories />
      <Bio />
      <Teleshopping />
      <Footer />
    </div>
  )
}
