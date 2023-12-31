import { Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart,}from '@mui/icons-material';

import './MoreMenu.css';
import { useState } from "react";

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div{
        margin-right:40px;
        font-size: 16; 
        align-items: center;
    }
`
const Container = styled(Box)`
    display: flex;
`
const LoginButton = styled(Button)`
    color: #304D30;
    background: #FBF6EE;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`


const DropdownMenu = ({ setOpen }) => {
  const handleMouseEnter = () => {
      setOpen(true);
  };
  
  const handleMouseLeave = () => {
      setOpen(false);
  };
  
  return (
    <div className={`dropdown-menu active`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ul>
        <DropdownItem text={'Edit Profile'} />
        <DropdownItem text={'Settings'} />
        <DropdownItem text={'Orders'} />
      </ul>
    </div>
  );
};
  
const MoreMenu = ({ setOpen }) => {
  const handleMouseEnter = () => {
    setOpen(true);
  };
 
  return (
    <div className="menu-trigger" style={{ marginTop: 5 }} onMouseEnter={handleMouseEnter}>
      More
    </div>
  );
};
  
const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  
  const handleWrapperMouseLeave = () => {
    setOpen(false);
  };

  return (
    <Wrapper onMouseLeave={handleWrapperMouseLeave}>
      <LoginButton variant="Contained">Login</LoginButton>
      <Typography style={{ marginTop: 5, width: 135 }}>Become a Seller</Typography>
      <div className="menu-container">
        <MoreMenu setOpen={setOpen} />
        {open && <DropdownMenu setOpen={setOpen} />}
      </div>
      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
    </Wrapper>
  );
};
  
  
  
  
function DropdownItem(props){
  return(
    <li className="dropdownItem">
      <a> {props.text} </a>
    </li>
  )
}

export default CustomButtons; 