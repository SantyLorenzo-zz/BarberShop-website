import React from 'react'
import styled from 'styled-components'

import DescriptionSection from './Description'
import { Card1, Card2 } from './Cards'
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
  width: 1300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export default function About() {
  return (
    <Wrapper>
      <DescriptionSection />
      <CardsContainer>
        <Card1 />
        <Card2 />
      </CardsContainer>
    </Wrapper>
  )
}