import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  font-family: 'Montserrat', sans-serif;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 280px;
  color: white;
  width: 400px;
`
const SubTitleLight = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #d6d6d6;
  letter-spacing: 5px;  
  vertical-align: baseline;
`
const SubTitleItalic = styled.p`
  font-family: 'Crimson Text', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  color: #d6d6d6;
  word-spacing: 3px;
`
const Title = styled.div`
  border: 6px solid #d6d6d6;
  justify-content: center;
  letter-spacing: 7px;
  align-items: center;
  font-weight: 700;
  font-size: 50px;
  display: flex;
  height: 90px;
  color: #d6d6d6;
  padding: 0 40px;
`


export default function theTitle() {
  return(
    <Wrapper>
      <SubTitleLight className="animated fadeInDown delay-1s">TRUE BARBERS</SubTitleLight>
      <Title className="animated fadeInUp ">STYLISH</Title>
      <SubTitleItalic className="animated fadeInDown delay-1s">The Best Or Nothing</SubTitleItalic>
    </Wrapper>
  )
}