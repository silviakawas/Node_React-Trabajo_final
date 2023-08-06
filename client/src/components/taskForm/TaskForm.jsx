import { useState } from "react";
import { StyledButton, StyledForm, StyledFormCont, StyledInput, StyledLabel, StyledTextArea, StyledTitle } from "./styles";

const TaskForm = ({setTasks})=>{

    const [taskData, setTaskData] = useState({
        title: '',
        date: '',
        note: ''
    });

    console.log(taskData);

    return(
        <>
            <StyledFormCont>
                <StyledTitle>¿Qué plan tienes hoy?</StyledTitle>

                <StyledForm id='form' onSubmit={e=>handleSubmit(e, taskData, setTasks)}>

                    <StyledLabel htmlFor='title'>Título:</StyledLabel>
                    <StyledInput
                        onInput={e => setTaskData({...taskData, title: e.target.value})}
                        type='text'
                        name='title'
                        id='title' 
                        placeholder='¿Cómo se titula tu plan?'/>

                    <StyledLabel htmlFor='date'>Fecha:</StyledLabel>
                    <StyledInput
                        onInput={e => setTaskData({...taskData, date: e.target.value})}
                        type='text'
                        name='date'
                        id='date' 
                        placeholder='¿Qué día va a ser?'/>

                    <StyledLabel htmlFor='note'>Nota:</StyledLabel>
                    <StyledTextArea
                        onInput={e => setTaskData({...taskData, note: e.target.value})}
                        type='text'
                        name='note'
                        id='note' 
                        placeholder='¡Cuéntame tu plan!'/>

                    <StyledButton type='submit'>¡Apunta mi plan!</StyledButton>
                    
                </StyledForm>
            </StyledFormCont>
        </>
    );
};

const handleSubmit = async (event, taskData, setTasks) =>{
    event.preventDefault();

    const response = await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        body: JSON.stringify(taskData),
        headers: {
            Accept: '*/*',
            'Content-Type' : 'application/json'
        }
    });

    const data = await response.json();
    console.log(data);
    setTasks(data);
};



export default TaskForm;