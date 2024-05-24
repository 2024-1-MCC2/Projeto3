import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Lupa from '../Assets/Img/lupa.png';

const NavBarContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 1em 0;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: end;

  @media (max-width: 890px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 890px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 0 1em;
  align-items: end;
 

  &:hover {
    color: ${({ hoverColor }) => hoverColor || '#000'};
  }

  @media (max-width: 890px) {
     margin: 1em 0;
    width: 100%;
    text-align: center; 
    font-size: 1.3em;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 890px) {
    display: block;
    margin-bottom: 1em;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 890px) {
    width:12em;
    justify-content: space-between;
    margin-top: 1em;
  }
`;

const InputHome = styled.input`
  padding: 0.313em;
  border: 0.25em solid #009640;
  border-radius: 0.625em;


  @media (max-width: 890px) {
    width: 10em;
  }
`;

const Button = styled.button`
  padding: 0.625em 0.625em;
  border: none;
  border-radius: 0.313em;
  background-color: rgba(255, 255, 224, 0.3);
  color: #fff;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ffda00;
  }

  @media screen  and (max-width:890px){
  width: 2em;
  padding: 0.625em 0.625em;
  border: none;
  border-radius: 0.313em;
  background-color: rgba(255, 255, 224, 0.3);
  color: #fff;
  margin-right: 2em;
  cursor: pointer;

  &:hover {
    background-color: #ffda00;
  }
  }
`;

const StyledHR = styled.hr`
  margin-top: 0.5em;  
  margin-right:2em;
  border: 0;
  height: 0.3em;
  background: linear-gradient(90deg, #009640 0%, #FFF500 50.5%, #FFDA00 64.5%, #F00 100%);;
 width: 45.9em;
  @media screen and (max-width:1200px){
    width: 0;
    height: 0;
  }
`;

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBarContainer>
      <NavContent>
        <MenuIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </MenuIcon>
        <NavMenu isOpen={isOpen}>
          <NavItem to="/" hoverColor="#83C71F">Home</NavItem>
          <NavItem to="http://cidadeembudasartes.sp.gov.br/" target="_blank" hoverColor="#83C71F">Prefeitura</NavItem>
          <NavItem to="/Escolas" hoverColor="#FFB700">Escolas</NavItem>
          <NavItem to="/Inscricao" hoverColor="#FFB700">Inscrições</NavItem>
          <NavItem to="/Projetos" hoverColor="red">Projetos</NavItem>
          <NavItem to="/Faq" hoverColor="red">FAQ</NavItem>
          <InputContainer>
          <InputHome placeholder="busca" />
          <Button><img src={Lupa} alt="search" /></Button>
        </InputContainer>
        </NavMenu>
      </NavContent>
      <StyledHR />
    </NavBarContainer>
  );
}

export default NavBar;
