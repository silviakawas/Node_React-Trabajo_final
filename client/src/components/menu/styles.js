import styled from "styled-components";

const StyledContainer = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    border-bottom: 1px solid #b14cc8;
`;

const StyledH1 = styled.h1`
    color: #b14cc8;
    font-family: 'Playfair Display', serif;
`;

const StyledUl = styled.ul`
    color: #b14cc8;
    width: 420px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 55px;
`;

const StyledLi = styled.li`
    color: #b14cc8;
    font-size: 16px;
    font-family: 'Playfair Display', serif;
    :hover{
        color: #fff;
    }
`;

const StyledP = styled.p`
    font-size: 20px;
    color: white;
`;

export {StyledContainer, StyledH1, StyledUl, StyledLi, StyledP};