import React from 'react'
import {Navs} from './navdata'
import styled,{css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {Button} from './button'
import {FaBars} from 'react-icons/fa'
import { useHistory } from 'react-router'

const NavLink = css`
    color:orange;
    display:flex;
    align-items:center;
    padding:0 1rem;
    height:100%;
    cursor:pointer;
    text-decoration:none;
`;

const Logo = styled(Link)`
    ${NavLink}
    color:#256785;
    font-family: 'Stalinist one';
`;

const Nav = styled.nav`
    height:60px;
    justify-content: space-between;
    display:flex;
    padding:1rem;
    z-index:100;
    width:100%;
    position:fixed;
`;
const MenuBars = styled(FaBars)`
    display: none;
    
    @media screen and (max-width:768px){
        display:block;
        height:40px;
        width:40px;
        cursor:pointer;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-50%,25%)
    }
`;




const NavMenu = styled.div`
    display:flex;
    align-items: center;
    margin-right: -48px;
    font-size:20px;

    @media screen and (max-width:768px){
        display: none;
    }

`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display:flex;
    align-items:center;
    margin-right:24px;
    @media screen and (max-width:768px){
        display: none;
    }
     
`;

const Navbar = ({toggle}) => {
    const history = useHistory();
    const buttonText = sessionStorage.getItem('token')==='' || sessionStorage.getItem('token')===null  ? 'Login':'Logout'
    const handleSession = () => {
        switch (buttonText){
            case 'Login':
                history.push('/login')
                break;
            case 'Logout':
                sessionStorage.setItem('token','')
                sessionStorage.setItem('rid','')
                history.push('/')
                window.location.reload()
                break;
            default:
                history.push('/')        
        }
    }
    return (
      <Nav>
          <Logo>SYN Rental </Logo>
          <MenuBars onClick={toggle}/>
          <NavMenu>
            {Navs.map((items,index) =>(
                <NavMenuLinks to={items.link} key={index}>
                    {items.title}
                </NavMenuLinks>
            ))}
          </NavMenu>
          <NavBtn>
              <Button  primary='true' onClick={handleSession} >{buttonText}</Button>
          </NavBtn>
      </Nav>  
       
        
    )
}

export default Navbar
