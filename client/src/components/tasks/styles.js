import styled from "styled-components";

const StyledTasksCont = styled.div`
    width: 80%;
    margin: auto;
    padding-bottom: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
`;

const StyledTitleCont = styled.div`
    margin-bottom: 60px;
`;

const StyledHr = styled.hr`
    background-color: white;
    width: 40%;
    border: 1px solid white;
    border-radius: 15px;
`;

const StyledTitle = styled.h1`
    font-family: 'Playfair Display', serif;
    color: white;
    margin-top: 60px;
    text-align: center;
`;

const StyledTask = styled.div`
    width: 350px;
    border: 1px solid #b14cc8;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    padding: 30px;
`;

const StyledH1 = styled.h1`
    color: #b14cc8;
    text-align: center;
    margin-bottom: 50px;
`;

const StyledH2 = styled.h2`
    color: #b14cc8;
    margin: 0 0 15px 0;
`;

const StyledP = styled.p`
    color: #b14cc8;
    margin: 0;
`;

const StyledButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 15px;
`;

const StyledButton = styled.button`
    background-color: #b14cc8;
    color: #06051e;
    border: 1px solid #b14cc8;
    border-radius: 5px;
    font-weight: bold;
    padding: 10px 15px;
    transition: all .5s ease;
    cursor: pointer;
    :hover{
        background-color: #06051e;
        color: #b14cc8;
    }
`;

export {StyledTasksCont, StyledTitleCont, StyledTitle, StyledHr, StyledTask, StyledH1, StyledH2, StyledP, StyledButtons, StyledButton};