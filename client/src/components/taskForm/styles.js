import styled from "styled-components";

const StyledFormCont = styled.div`
    width: 50%;
    padding: 40px 0;
    margin: auto;
`;

const StyledTitle = styled.h2`
    color: white;
    text-align: center;
    font-family: 'Playfair Display', serif;
    font-size: 40px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledLabel = styled.label`
    color: #b14cc8;
    margin-bottom: 10px;
`;

const StyledInput = styled.input`
    color: #b14cc8;
    background-color: #06051e;
    border: 1px solid #b14cc8;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 10px 15px;
    ::placeholder{
        color: #f4c5feb5;
    }
`;

const StyledTextArea = styled.textarea`
    color: #b14cc8;
    background-color: #06051e;
    border: 1px solid #b14cc8;
    border-radius: 5px;
    min-height: 150px;
    margin-bottom: 15px;
    padding: 10px 15px;
    ::placeholder{
        color: #f4c5feb5;
    }
`;

const StyledButton = styled.button`
    background-color: #b14cc8;
    color: #06051e;
    border: 1px solid #b14cc8;
    border-radius: 5px;
    font-weight: bold;
    margin-bottom: 15px;
    padding: 10px 15px;
    transition: all .5s ease;
    cursor: pointer;
    :hover{
        background-color: #06051e;
        color: #b14cc8;
    }
`;

export {StyledFormCont, StyledTitle, StyledForm, StyledLabel, StyledInput, StyledTextArea, StyledButton};