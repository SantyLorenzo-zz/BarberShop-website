import React from 'react'
import styled from 'styled-components'

import { Title, SubTitle, Line, LinesContainer, Square } from '../AboutUs/Description'

const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
` 
const MyTitle = styled(Title)`
  width: 300px;
`

export default function DescriptionSection() {
  return (
    <Wrapper>
      <MyTitle>OUR WORK</MyTitle>
      <LinesContainer>
        <Line />
        <Square className="fas fa-square-full" />
        <Line />
      </LinesContainer>
      <SubTitle>Beautiful haircuts with up to day styles</SubTitle>
    </Wrapper>
  )
}