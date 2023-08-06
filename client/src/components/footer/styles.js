import styled from "styled-components";

const StyledContainer = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    border-top: 1px solid #b14cc8;
    padding-bottom: 50px;
`;

const StyledH1 = styled.h1`
    color: #b14cc8;
    font-family: 'Playfair Display', serif;
`;

const StyledH3 = styled.h3`
    color: #b14cc8;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 16px;
    padding-right: 40px;
`;

const StyledLink = styled.a`
    color: white;
    font-family: 'Playfair Display', serif;
    :hover{
        color: #b14cc8;
    }
`;

export {StyledContainer, StyledH1, StyledH3, StyledLink};