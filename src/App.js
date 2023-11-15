import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Traveler from './pages/Traveler'
import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'
import Channel from './pages/Channel'
import Search from './pages/Search'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/traveler" element={<Traveler />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/search/:searchId" element={<Search />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App