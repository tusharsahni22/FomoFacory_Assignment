import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  background-color: #dfa4a4;
  padding: 5px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20%;
`;

const Logo = styled.img`
width: 50px;
`;

const Menu = styled.div`
    display: flex;
    gap: 50px;
    color: white;

`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SignUpButton = styled.div`
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`

function Header() {
  // const navigate =  useNavigate();


  return (
  <>
    <Wrapper>
      <Logo src="/logo.webp" alt="Brand Logo" />
      <Menu>
        <span>Home</span>
        <span>Feature</span>
        <span>Pricing</span>
        <span>Blog</span>
      </Menu>
      <IconContainer>
      <SignUpButton>
        Signup
      </SignUpButton>
      </IconContainer>
    </Wrapper>
    </>
  );
}

export default Header;