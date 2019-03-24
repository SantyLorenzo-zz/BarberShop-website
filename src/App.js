import React from 'react'
import styled from 'styled-components'
import Texture from './AboutUs/texture.png'

import Home from './Home/Home'
import About from './AboutUs/About'
import OurWork from './OurWork/OurWork'
import Location from './Location/Location'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
const Space = styled.div`
  width: 100%;
  height: 50px;
  background: url(${Texture});
  background-repeat: repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function App() {
  return (
    <Wrapper>
      <Home id='Home'/>
      <Space id='About' />
      <About />
      <Space  id='OurWork' />
      <OurWork />
      <Space id='Location' />
      <Location />
      <Space id='Contact'/>
      <Space />
      <Contact />
      <Space />
      <Space />
      <Footer />
    </Wrapper>
  )
}

