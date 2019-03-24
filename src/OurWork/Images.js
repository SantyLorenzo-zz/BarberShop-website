import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
` 
const ImgContainer = styled.section`
  width: 100%;
  display flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
`
const Img = styled.div`
  width: 600px;
  height: 380px
  margin: 15px;
  background-size: cover;
  background-position: center;
  border: 1px solid black;
`

export default function About() {
  return (
    <Wrapper>
      <ImgContainer>
        <Img style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488282396544-0212eea56a21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')` }} />
        <Img style={{ backgroundImage: `url('https://images.unsplash.com/photo-1553094529-fb9778f78829?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')` }} />
        <Img style={{ backgroundImage: `url('https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')` }} />
        <Img style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518220950441-a7788dff3dd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')` }} />
        <Img style={{ backgroundImage: `url('https://images.unsplash.com/photo-1485290334039-a3c69043e517?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80')` }} />
        <Img style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542038179395-5ef8e08dd78a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')` }} />
      </ImgContainer>
    </Wrapper>
  )
}