import React from "react";
import styled from "styled-components";
import Create from "./components/Todo/Create";
import TodosList from "./components/Todo/TodosList";
import { Header } from "./styled-components/Header"
import { Title } from "./styled-components/Title";
import { Container } from "./styled-components/Container";
import { ToggleMode } from "./styled-components/ToggleMode";

import { mapDispatchToProps, mapStateToProps } from './containers/theme/handleTheme';
import { connect } from "react-redux";

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { backgroundColor } from './theme/background'

const GlobalStyle = createGlobalStyle`
  h1, h2, h3{
    margin: 0;
  }

  *{
      box-sizing: border-box;
      outline: none;
  }

  body{
      background-color: ${backgroundColor};
      /* transition: background-color 0.1s ease-in-out; */
      font-size: 18px;
  }
`



const StyledApp = styled.div`
  font-family: 'Josefin Sans', sans-serif;
`

function App({ toggleTheme, theme_mode }) {
  return (
    <ThemeProvider theme={{ mode: theme_mode }}>
      <GlobalStyle />
      <StyledApp>


      <Header theme={theme_mode} />
      
      <Container>
        <div className="row space-between">
          <Title>TODO</Title>
          <ToggleMode theme={theme_mode} onClick={() => toggleTheme()} />
        </div>

        <Create />

        <TodosList />

      </Container>


      </StyledApp>
    </ThemeProvider>
  )
}




export default connect(mapStateToProps, mapDispatchToProps)(App);
