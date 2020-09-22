import Head from 'next/head'
import styled from "styled-components";
import PropsTheme from '../styles/theme/PropsTheme';
import { useRouter } from "next/router";
import { useState } from "react";
import NotificationContainer from '../context/NotificationContext';
import NotificationType from '../context/NotificationType';
import Axios from 'axios';
export default function Home() {

  const router = useRouter();

  const [email, setEmail] = useState("")
  const notificationContext = NotificationContainer.useContainer();

  return (
    <Wrapper>
      <ContentContainer>
        <h1>The new way to study.</h1>
        <br />
        <p>Notesets uses the power of machine learning to make your study  sessions (a lot) easier.</p>
        <NotifyContainer>
          
            <SizedInput
              placeholder="Enter your email"
              type="text" value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <PrimaryButton type={"submit"} onClick={(e) => {
              e.preventDefault();
              Axios.post("/api/notify", {
                email
              }).then(res => {
                notificationContext.setNotification(NotificationType.SUCCESS, res.data.message)
                setEmail("")
              }).catch(err => {
                notificationContext.setNotification(NotificationType.WARN, err.response.data.message)
                setEmail("")
              })
            }}><strong>Notify me</strong></PrimaryButton>
          <SecondaryButton onClick={() => router.push("/faq")}><strong>FAQ</strong></SecondaryButton>
        </NotifyContainer>
      </ContentContainer>
      <SplashImage src="/img/home-splash.png" alt="" />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media(max-width: 1300px) {
    flex-direction: column;
  }

  @media(max-width: 400px) {
    justify-content: center;
  }
`

const SplashImage = styled.img`
  height: 450px;

  @media(max-width: 700px) {
    display: none;
  }

`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 700px) {
    text-align: center;
  }
`

const NotifyContainer = styled.form`
  display: flex;
  padding-top: 50px;
  width: 100%;

  @media(max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

const SizedInput = styled.input`
  width: 60%;

  @media(max-width: 700px) {
    width: 100%;
    margin-bottom: 5px;
  }
`

const PrimaryButton = styled.button`
  margin: 0 20px;
  color: white;
  background: ${(props: PropsTheme) => props.theme.accentColor};
  border: ${(props: PropsTheme) => props.theme.accentColor};
  border-radius: 5px;
  width: 25%;
  box-shadow: 0px 15px 35px ${(props: PropsTheme) => props.theme.boxShadowAccentColor};

  @media(max-width: 700px) {
    width: 100%;
    margin-bottom: 5px;
  }
`

const SecondaryButton = styled.button`
  color: ${(props: PropsTheme) => props.theme.accentColor};
  background: ${(props: PropsTheme) => props.theme.background};
  border: 1px solid ${(props: PropsTheme) => props.theme.accentColor};
  border-radius: 5px;
  width: 15%;
  box-shadow: 0px 15px 31px ${(props: PropsTheme) => props.theme.boxShadowAccentColor};

  @media(max-width: 700px) {
    width: 100%;
    margin-bottom: 5px;
  }
`