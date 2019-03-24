import React from 'react'
import styled from 'styled-components'

import { Title, SubTitle, Line, Square, LinesContainer } from '../AboutUs/Description'

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  line-height: 40px;
`
const MyTitle = styled(Title)`
  width: 250px;
  text-align: center;
`
const MySubTitle = styled(SubTitle)`
  width: 60%;
  letter-spacing: 3px;
  text-align: center;
`

export default function Text() {
  return (
    <Wrapper>
      <MyTitle>Location</MyTitle>
      <LinesContainer>
        <Line />
          <Square className="fas fa-square-full" />
        <Line />
      </LinesContainer>
      <MySubTitle>178 Petracchi, San Miguel del Monte, Bs As, Arg</MySubTitle>
    </Wrapper>
  )
}