import React from 'react'
import styled from 'styled-components'

import logo from './logo.png'

const Wrapper = styled.header`
  align-items: center;
  display: flex;  
  height: 100px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,1);
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,1);
`

const Logo = styled.div`
  align-items: center;
  margin-left: 30px;
  display: flex;
  height: 100px;
  width: 120px;
`
const Menu = styled.ul`
  justify-content: space-evenly;
  list-style-type: none;
  flex-direction: row;
  display: flex;
  width: 900px;
  margin: 0;

  @media (max-width: 1150px) {
    display: none
  }
`
const ItemContainer= styled.li``

export const Item = styled.a`
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  font-weight: 400;
  font-size: 20px;
  font-size: 13px;
  color: #d6d6d6;

  ${ItemContainer}:hover & {
    color: black;
  }
`

const Container = styled.div`
  height: 100%;
  width: 1400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1650px) {
    width: 1300px;
  }

  @media (max-width: 1600px) {
    width: 1200px;
  }
  @media (max-width: 1300px) {
    width: 1000px;
  }
  @media (max-width: 1150px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

export default function Header() {
  return(
    <Wrapper id='Home'>
      <Container>
        <Logo>
          <a href='https://websites1.netlify.com/'>
            <img src={logo} alt='logo'/>
          </a>
        </Logo>
        <div>
          <Menu>
            <ItemContainer>
              <Item href='#Home'>HOME</Item>
            </ItemContainer>
            <ItemContainer>
              <Item href='#About'>ABOUT US</Item>
            </ItemContainer>
            <ItemContainer>
              <Item href='#OurWork'>WORK</Item>
            </ItemContainer>
            <ItemContainer>
              <Item href='#Location'>LOCATION</Item>
            </ItemContainer>
            <ItemContainer>
              <Item href='#Contact'>CONTACT</Item>
            </ItemContainer>
          </Menu>
        </div>
      </Container>
    </Wrapper>
  )
}