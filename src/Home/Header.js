import React from 'react'
import styled from 'styled-components'

import logo from './logo.png'

const Wrapper = styled.header`
  justify-content: space-between;
  flex-direction: row;
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
  justify-content: space-between;
  list-style-type: none;
  flex-direction: row;
  display: flex;
  width: 900px;
`
const ItemContainer= styled.li``

const Icon = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`


const Item = styled.a`
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

const IconsContainer = styled.div`
  height: 100px;
  width: 200px;
  margin-right: 30px;
  display: flex;
  flex-direction: row;
  align-items: center
  justify-content: space-between;
`

export default function Header() {
  return(
    <Wrapper>
      <Logo>
        <a href='http://localhost:3000/'>
          <img src={logo} alt='logo'/>
        </a>
      </Logo>
      <div>
        <Menu>
          <ItemContainer>
            <Item href='http://localhost:3000/'>HOME</Item>
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
            <Item href='http://localhost:3000/'>CONTACT</Item>
          </ItemContainer>
        </Menu>
      </div>
      <IconsContainer>
        <Icon>
          <Item href='http://localhost:3000/'><i className="fab fa-instagram fa-2x"></i></Item>
        </Icon>
        <Icon>
          <Item href='http://localhost:3000/'><i className="fab fa-github fa-2x"></i></Item>
        </Icon>
        <Icon>
          <Item href='http://localhost:3000/'><i className="fab fa-facebook fa-2x"></i></Item>
        </Icon>
      </IconsContainer>
    </Wrapper>
  )
}