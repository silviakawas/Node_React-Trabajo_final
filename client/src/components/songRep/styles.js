import styled from "styled-components";

const StyledTitle = styled.h1`
    font-family: 'Playfair Display', serif;
    color: #b14cc8;
    text-align: center;
    margin: 0;
    padding-top: 90px;
`;
const StyledSongRep = styled.div`
    width: 45%;
    padding: 70px 0 100px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    :first-child{
        align-self: flex-end;
    }
`;

const StyledButton = styled.button`
    font-size: 30px;
    color: #b14cc8;
    background-color: transparent;
    border: 1px solid #b14cc8;
    border-radius: 100%;
    cursor: pointer;
    transform: all 0.5s ease;
    :hover{
        background-color: #b14cc8;
        color: #06051e;
    }
`;

export {StyledTitle, StyledSongRep, StyledButton};