import React from 'react'
import styled from 'styled-components'

import { Title } from '../AboutUs/Description'
import { ImgContainer, Img } from '../OurWork/Images'

const Wrapper = styled.div`
  margin: 50px 0;
  width: 350px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 400px) {
    width: 30px;
  }
`
const MyTitle = styled(Title)`
  font-size: 25px;
  width: 350px;
  height: 34px;
  text-align: center;
  color: black;
  border-bottom: 1px solid black;

  @media (max-width: 350px) {
    width: 280px;
    font-size: 19px;

  }
`
const MyImg = styled(Img)`
  width: 85px;
  height: 85px;
  border: none;
`
const Container = styled(ImgContainer)`
  width: 350px;

  @media (max-width: 350px) {
    width: 300px;
  }
`


export default function Pictures() {
  return (
    <Wrapper>
      <MyTitle>FROM INSTAGRAM</MyTitle>
      <Container>
        <MyImg style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488282396544-0212eea56a21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')` }} />
        <MyImg style={{ backgroundImage: `url('https://images.unsplash.com/photo-1553094529-fb9778f78829?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')` }} />
        <MyImg style={{ backgroundImage: `url('https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')` }} />
        <MyImg style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518220950441-a7788dff3dd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')` }} />
        <MyImg style={{ backgroundImage: `url('https://images.unsplash.com/photo-1485290334039-a3c69043e517?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80')` }} />
        <MyImg style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542038179395-5ef8e08dd78a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')` }} />
      </Container>
    </Wrapper>
  )
}