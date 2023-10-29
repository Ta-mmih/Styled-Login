import React from 'react';
import styled from 'styled-components';
import img from './background.png';

const LoginScreen = () => {
  return (
    <Container>
        <BackgroundImage/>
      <LoginForm>
        <Title>Login</Title>
        <FormGroup>
          <Label htmlFor="loginID">Login ID</Label>
          <Input type="text" id="loginID" placeholder="Enter Login ID" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Enter Password" />
        </FormGroup>
        <BlockCheckbox>
          <Checkbox type="checkbox" id="rememberMe" />
          <CheckboxLabel htmlFor="rememberMe">Remember Me</CheckboxLabel>
          <Span><Link>Change Password</Link></Span>
        </BlockCheckbox>
        <BlockCheckbox>
          <Checkbox type="checkbox" id="agreeToTerms" />
          <CheckboxLabel htmlFor="agreeToTerms">
            Agree to <Link href="#">Terms & Conditions</Link>
          </CheckboxLabel>
        </BlockCheckbox>
        <Button>Login</Button>
        <Label>Don't have an account?<Link href='#'>Register Here</Link></Label>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #ffffff, #dfdcdc);
  position: relative;
  overflow: hidden;

  @media (max-width: 1170px) {
    background: rgb(238,174,202);
    background: linear-gradient(4deg, rgba(238,174,202,1) 9%, rgba(148,187,233,1) 100%);
  }
  
  
  
`;

const BackgroundImage = styled.img`
  background-image: url(${img});
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 1170px) {
    display: none; 
`;

const LoginForm = styled.div`
  position: absolute;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 50px;
  width: 600px;
  height: 500px;
  text-align: center;

  @media (max-width: 1170px) {
    position: relative;

`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: -webkit-fill-available;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Span = styled.span`
  position: absolute;
  right: 50px;
  `;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const CheckboxLabel = styled.label`
  margin-bottom: 0;
`;

const BlockCheckbox = styled.div`
  display: block;
  text-align: left;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 70%;
  padding: 10px;
  margin: 15px;
  color: white;
  border: none;
  background: linear-gradient(to bottom, #65d4f3d9, #0e1c85);
  border-radius: 5px;
  cursor: pointer;
`;

const Link = styled.a`
  color: tomato;
  border-color: tomato;
`;

export default LoginScreen;
