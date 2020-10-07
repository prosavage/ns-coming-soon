import styled from "styled-components";
import Head from "next/head";
import DropDownQuestion from "./../components/FaqDropDownQuestion";

export default function FAQ(props) {
    return <Wrapper>
        <Head>
            <title>Notesets FAQ</title>
        </Head>
        <ContentContainer>
            <h1>FAQs</h1>
            <p>See the most asked questions about our product, as well as our responses to them.</p>
            <p> Have your own question(s)? Contact us on the next page and we’ll do our best to answer it.</p>
            <QuestionsContainer layout>
                <DropDownQuestion
                    question={"What is Notesets?"}
                    answer={"🔥 Notesets is a quizlet alternative with spicy additions, like, automatic flashcard conversion, personalized learning games, and more."}
                />
                <DropDownQuestion
                    question={"How does Notesets automatically extract content from my notes?"}
                    answer={"✨ Magic!, just kidding, we use the power the artifical intelligence to understand, then, convert notes."}
                />
                <DropDownQuestion
                    question={"Why should I use Notesets over other services?"}
                    answer={"😎 You get personalized learning games, automated note conversion, and much more for free!"}
                />
                <DropDownQuestion
                    question={"How is my data handled? Is it secure?"}
                    answer={"🔐 All user data is hashed, and notesets can be set to private, making they viewable by only you."}
                />
                <DropDownQuestion
                    question={"Will this get me a perfect score on my tests?"}
                    answer={"🤣 It might! Use our personalized learning quiz & games to learn quickly and effectively."}
                />
            </QuestionsContainer>
        </ContentContainer>
        <QuestionMark>?</QuestionMark>
    </Wrapper>
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 700px) {
        align-items: flex-start;
    }

    @media(max-height: 720px) {
        padding-top: 120px;
    }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  @media(max-width: 700px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

const QuestionsContainer = styled.div`
    width: 100%;
    padding: 30px 0;

    display: flex;
    flex-direction: column;
`

const QuestionMark = styled.h1`
    font-size: 30em;

    @media(max-width: 700px) {
        display: none;
    }
`