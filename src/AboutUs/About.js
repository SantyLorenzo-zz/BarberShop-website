import React from 'react'
import styled from 'styled-components'

import DescriptionSection from './Description'
import Images from './Images'
import texture from './texture.png'


const Wrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 100vh;
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
        <Images />
      </CardsContainer>
    </Wrapper>
  )
}