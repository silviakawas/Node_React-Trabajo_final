import styled from "styled-components";


const StyledHeader = styled.div`
    width: 100%;
    height: 500px;
    background-image: url('../../public/Fondo-inicio.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-bottom: 1px solid #b14cc8;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 120px;
`;

const StyledDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0px;
`;

const StyledH1 = styled.h1`
    color: white;
    font-family: 'Playfair Display', serif;
    font-size: 80px;
    margin: 0;
    line-height: 80px;
    text-shadow: 2px 2px 10px #06051e;
`;

const StyledP = styled.p`
    color: white;
    /* background-color: #06051e; */
    font-family: 'Playfair Display', serif;
    font-size: 30px;
    line-height: 34px;
    text-shadow: 2px 2px 3px #06051e;
    margin: 0;
    padding: 10px 20px;
    display: inline-block;
`;

const StyledContainer = styled.div`
    width: 100%;
`;

export {StyledHeader, StyledDiv, StyledH1, StyledP, StyledContainer};