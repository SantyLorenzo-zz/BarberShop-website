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
  width: 900px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Borders = styled.div `
  width: 804px;
  height: 454px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`

export default function About() {
  return (
    <Wrapper>
      <DescriptionSection />
      <CardsContainer>
        <Borders>
          <Images />
        </Borders>
      </CardsContainer>
    </Wrapper>
  )
}