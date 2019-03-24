import React from 'react'
import styled from 'styled-components'

import { Title, Line, LinesContainer, Square } from '../AboutUs/Description'
import Texture from './scissors.jpg'

const Wrapper = styled.div`
  width: 100%;
  height: 500px
  display: flex;
  flex-direction: column
  align-items: center;
  justify-content: space-around;
  background: url(${Texture});
  background-size: cover;
`
const MyTitle = styled(Title)`
  width: 300px;
  height: 50px;
  text-align: center;
  color: #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
`
const Container = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Method = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 5px;
  color: #d6d6d6;
`


export default function Contact() {
  return (
    <Wrapper>
      <MyTitle>CONTACT US</MyTitle>
      <LinesContainer>
        <Line />
        <Square className="fas fa-square-full" />
        <Line />
      </LinesContainer>
      <Container>
        <Method>
          <i style={{ marginRight: '25px', color: '#e0a240' }} class="fas fa-phone" />
          221-3642233
        </Method>
        <Method >
          <i style={{ marginRight: '25px', color: '#e0a240' }} class="fas fa-envelope" />
            SANTYLORE4@GMAIL.COM
        </Method>
      </Container>
    </Wrapper>
  )
}