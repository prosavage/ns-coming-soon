import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import LightTheme from "../styles/theme/LightTheme";
import Navbar from "./../components/ui/Navbar";
import GlobalStyle from "../styles/GlobalStyle";
import { Sun, Moon } from "react-feather";
import DarkTheme from "../styles/theme/DarkTheme";
import PropsTheme from "../styles/theme/PropsTheme";
function MyApp({ Component, pageProps }) {

  const [darkTheme, setDarkTheme] = useState<Boolean>(false);

  const getTheme = () => {
    return darkTheme ? DarkTheme : LightTheme
  }

  return (
    <Wrapper>
      <ThemeProvider theme={getTheme()}>
        <GlobalStyle />
        <Navbar />
        <PageContainer>
          <Component {...pageProps} />
          <PageBackgroundImage alt="" />
          <ThemeToggleContainer
            onClick={() => {
              setDarkTheme(!darkTheme)
            }}
          >
            {darkTheme ? <Moon /> : <Sun />}
          </ThemeToggleContainer>
        </PageContainer>
        <BackgroundLine>
            <BackgroundLineLeft />
            <BackgroundLineRight />
          </BackgroundLine>
      </ThemeProvider>
    </Wrapper>
  );
}



const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const PageBackgroundImage = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 70%;
  background-color: ${(props: PropsTheme) => props.theme.backgroundImageColor};
  mask-image: url("/img/background/background.svg");
  -webkit-mask-image: url("/img/background/background.svg");
  z-index: -1;

  @media(min-width: 1000px) {
    width: 60%;
  }
  
  @media(min-height: 1150px) {
    width: 30%;
    mask-image: url("/img/background/background-lg.svg");
    -webkit-mask-image: url("/img/background/background-lg.svg");
  }
`

const BackgroundLine = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10px;
  display: flex;
  flex-direction: row;
  z-index:0;
`
const BackgroundLineLeft = styled.div`
  height: 100%;
  flex-basis: 40%;
  background: ${(props: PropsTheme) => props.theme.accentColor};
`

const BackgroundLineRight = styled.div`
  height: 100%;
  flex-basis: 60%;
  background: ${(props: PropsTheme) => props.theme.accentColorSecondary};
`

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`

const ThemeToggleContainer = styled.div`
  /* Positioning. */
  position: fixed;
  right: 10px;
  bottom: 10px;
  
  /* Styling */
  padding: 4px;

  /* Usability */
  cursor: pointer;
`


export default MyApp;