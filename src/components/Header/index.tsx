import React from 'react'
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';
import { useNavigate } from 'react-router-dom';
import { IHeader } from './types';

const Header = ({autenticado}: IHeader) => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  }

  const goToRegister = () => {
    navigate("/register");
  }

  return (
    <Wrapper>
      <Container>
          <Row>
            <img src={logo} alt="Logo da dio"/>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button onClick={goToLogin} title="Entrar" />
                <Button onClick={goToRegister} title="Cadastrar" />
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }