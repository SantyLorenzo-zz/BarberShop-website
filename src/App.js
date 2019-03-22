import React from 'react'
import styled from 'styled-components'

import Home from './Home/Home'
import About from './AboutUs/About'
import OurWork from './OurWork/OurWork'



const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export default function App() {
  return (
    <Wrapper>
      <Home />
      <About />
      <OurWork />
    </Wrapper>
  )
}

