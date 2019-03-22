import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 50%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-top: 45px;
`
const Title = styled.h2`
  width: 400px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 35px;
  color: #222222;
  letter-spacing: 5px;
  border-bottom: 1px solid #222222;
`
const SubTitle = styled.span`
  font-family: 'Crimson Text', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 25px;
  color: #424141;
`
const Line = styled.span`
  width: 30px;
  height: 1px;
  border-bottom: 1px solid #d6d6d6;
  margin: 0 10px;
`
const LinesContainer = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Square = styled.i`
  transform: rotate(45deg);
  color: #e0a240;
` 
const Description = styled.span`
  font-family: 'Raleway', sans-serif;  
  font-size: 22px;
  color: #424141;
  text-align: center;
`

export default function DescriptionSection() {
  return (
    <Wrapper>
      <Title>WE ARE STYLISH</Title>
      <SubTitle>A beautiful responsive multi-purpose wordpress theme</SubTitle>
      <LinesContainer>
        <Line />
        <Square className="fas fa-square-full" />
        <Line />
      </LinesContainer>
      <Description>Oshine comes with 12 unique and stunning demos. We have crafted each and every demo with extensive care and precision and the theme is power packed yet easy to use.</Description>
    </Wrapper>
  )
}