import React from 'react'
import styled from 'styled-components'

import DescriptionSection from './Description'
import Images from './Images'
import texture from '../AboutUs/texture.png'

const Wrapper = styled.div`
width: 100%;
background: url(${texture});
` 

export default function About() {
  return (
    <Wrapper>
      < DescriptionSection />
      <Images />
    </Wrapper>
  )
}