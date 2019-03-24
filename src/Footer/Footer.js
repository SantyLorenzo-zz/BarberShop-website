import React from 'react'
import styled from 'styled-components'

import Links from './Links'
import Social from './Social'
import Pictures from './Pictures'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
  background-blend-mode: multiply;  `

export default function Footer() {
  return (
    <Wrapper>
      <Links />
      <Social />
      <Pictures />
    </Wrapper>
  )
}