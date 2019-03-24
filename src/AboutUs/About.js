import React from 'react'
import styled from 'styled-components'

import DescriptionSection from './Description'
import Image from './Image'
import texture from './texture.png'


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column
  justify-content: space-between;
  align-items: center;
  background: url(${texture});
  background-repeat: repeat;
`
const CardsContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default function About() {
  return (
    <Wrapper>
      <DescriptionSection />
      <CardsContainer>
        <Image />
      </CardsContainer>
    </Wrapper>
  )
}