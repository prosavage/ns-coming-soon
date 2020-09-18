import styled from "styled-components";
import { ChevronDown } from "react-feather";
import PropsTheme from "../styles/theme/PropsTheme";
import { useState } from "react";

export default function DropDownQuestion(props) {

    const [open, setOpen] = useState<Boolean>(false);

    return <Wrapper>
        <Header onClick={() => setOpen(!open)}>
            <p>{props.question}</p>
            <ChevronDown />
        </Header>
        {open && <DropDown>
            {props.answer}
        </DropDown>}
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3px 0;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid ${(props: PropsTheme) => props.theme.color};
    border-radius: 5px;
    padding: 10px;
    
`

const DropDown = styled.div`
    display: flex;
    padding: 10px;
    border: 2px solid ${(props: PropsTheme) => props.theme.color};
    border-top: none;

`