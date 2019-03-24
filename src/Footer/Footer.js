import React from 'react'
import styled from 'styled-components'

import Links from './Links'
import Social from './Social'
import Pictures from './Pictures'
import texture from '../AboutUs/texture.png'


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-evenly;
  background: url(${texture})
`

export default function Footer() {
  return (
    <Wrapper>
      <Links />
      <Social />
      <Pictures />
    </Wrapper>
  )
}