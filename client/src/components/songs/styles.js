import styled from "styled-components";

const StyledSongCont = styled.div`
    width: 500px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    border: 1px solid #b14cc8;
    border-radius: 10px;
    padding: 20px 40px 20px 20px;
`;

const StyledDiv = styled.div`
    width: 50%;
`;

const StyledSongImg = styled.img`
    width: 200px;
`;

const StyledTitle = styled.h3`
    color: #b14cc8;
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    margin: 0 0 8px 0;
`;

const StyledPlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`;

const StyledHr = styled.hr`
    width: 70%;
    background-color: #b14cc8;
    border: 1px solid #b14cc8;
    border-radius: 20px;
`;

const StyledP = styled.p`
    color: #b14cc8;
    margin: 0;
`;

export {StyledSongCont, StyledDiv, StyledSongImg, StyledTitle, StyledPlay, StyledHr, StyledP};