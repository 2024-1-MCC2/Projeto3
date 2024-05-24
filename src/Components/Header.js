import React from 'react'
import styled from 'styled-components'
import Logo from '../Assets/Img/Logo.png'
import '../Components/CSSFiles/NavBarStyles.css'
import NavBar from './NavBar'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-Items: center; 
    color: #000;
    font-weight: bold;
    padding: 0.625em 1.25em;
`
const Hlogo = styled.div`
    align-items: center;
    img{
        width: 10em;
        height: auto;
        margin: 0;
        
    }
`
function Header() {
    return (
        <HeaderContainer>
            <Hlogo><img src={Logo} alt='' />
            </Hlogo>
          <NavBar/>
        </HeaderContainer>
    )
}
export default Header