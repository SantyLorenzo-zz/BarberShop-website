import React from 'react'
import styled from 'styled-components'

import { Title } from '../AboutUs/Description'

const Wrapper = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`
const MyTitle = styled(Title)`
  width: 250px;
  height: 34px;
  font-size: 25px;
  text-align: center;
  color: black;
  border-bottom: 1px solid black;
`
const Container = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Icon = styled.i`
  color: #e0a240;
`
const IconContainer = styled.a`
  margin: 0 10px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 1px solid #e0a240;

  &:hover {
    background-color: #e0a240;
  }
  &:hover ${Icon}{
    color: white;
  }
`

export default function Social() {
  return (
    <Wrapper>
      <MyTitle>FOLLOW US</MyTitle>
      <Container>
        <IconContainer href='https://www.facebook.com/'>
          <Icon className="fab fa-facebook-f fa-2x" />
        </IconContainer>
        <IconContainer href='https://www.instagram.com/'>
          <Icon className="fab fa-instagram fa-2x" />
        </IconContainer>
        <IconContainer href='https://twitter.com/'>
          <Icon className="fab fa-twitter fa-2x" />
        </IconContainer>
        <IconContainer href='https://www.linkedin.com/'>
          <Icon className="fab fa-linkedin fa-2x" />
        </IconContainer>
      </Container>
    </Wrapper>
  )
}