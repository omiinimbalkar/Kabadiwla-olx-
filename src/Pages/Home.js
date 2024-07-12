import React, { useEffect, useContext } from 'react'
import Banner from '../Components/Banner/Banner'
import Loading from '../Store/LoadingContext'
import LoadingPage from '../Components/Loading/Loading'
import Navbar from '../Components/Navbar/Navbar'
import Posts from '../Components/Posts/Posts'
import Footer from '../Components/Footer/Footer'
import Fresh from '../Components/Posts/Fresh'
import { LoadingContext } from '../Store/LoadingContext'
import Navbar2 from '../Components/Navbar2/Navbar2'

function Home() {
  const { loading } = useContext(LoadingContext)
  return (
    <div>
      {loading ?   null :<LoadingPage/>} 
      <Navbar2/>
      <Navbar />
      <Banner />
      <Posts />
      <Footer />
      
    </div>
  )
}

export default Home