import styled from "styled-components";
import PropsTheme from "../styles/theme/PropsTheme";
import { Download } from "react-feather";
import { useRouter } from "next/router";

export default function Contact(props) {

  const router = useRouter();

  return <Wrapper>
    <ContentContainer>
      <h1>Press Kit</h1>
      <p>Interested in writing about us? We’re flattered. Here’s a little something to help you represent our brand.</p>
      <SecondaryButton onClick={() => router.push("/branding/branding-kit.zip")}><Download/><strong>Download Press Kit</strong></SecondaryButton>
    </ContentContainer>
    <ContentContainer>
      <h1>Contact us</h1>
      <ContactInput placeholder="Name" type="text" />
      <ContactInput placeholder="Email address" type="text" />
      <ContactTextArea rows={7} placeholder="Your message" />
      <PrimaryButton><strong>Send It &rarr;</strong></PrimaryButton>
    </ContentContainer>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media(max-width: 1300px) {
    flex-direction: column;
    text-align: center;
  }

  @media(max-width: 400px) {
    justify-content: center;
  }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;

  @media(max-width: 1300px) { 
      align-items: center;
  }

  @media(max-width: 700px) {
    text-align: center;
    max-width: auto;
  }
`

const ContactInput = styled.input`
    margin: 10px 0;
    width: 100%;
`

const ContactTextArea = styled.textarea`
    width: 100%;
`

const PrimaryButton = styled.button`
  margin: 0 20px;
  color: white;
  background: ${(props: PropsTheme) => props.theme.accentColor};
  border: ${(props: PropsTheme) => props.theme.accentColor};
  border-radius: 5px;
  box-shadow: 0px 15px 35px ${(props: PropsTheme) => props.theme.boxShadowAccentColor};

  margin: 10px 0;

  @media(max-width: 700px) {
    width: 100%;
    margin-bottom: 5px;
  }
`

const SecondaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;

  color: ${(props: PropsTheme) => props.theme.accentColor};
  background: ${(props: PropsTheme) => props.theme.background};
  border: 1px solid ${(props: PropsTheme) => props.theme.accentColor};
  border-radius: 5px;
  box-shadow: 0px 15px 31px ${(props: PropsTheme) => props.theme.boxShadowAccentColor};
  width: 200px;
  @media(max-width: 700px) {
    width: 100%;
    margin-bottom: 5px;
  }
`