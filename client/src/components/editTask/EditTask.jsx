import { StyledButton, StyledForm, StyledFormCont, StyledInput, StyledLabel, StyledTextArea, StyledTitle } from "./styles";

const EditTask = ({setTasks, taskToEdit, setTaskToEdit, setIsEditing})=>{

    return(
        <>
            <StyledFormCont>
                <StyledTitle>¡Modifica tu plan!</StyledTitle>

                <StyledForm id='form' onSubmit={e=>handleSubmit(e, taskToEdit, setTasks, setIsEditing)}>

                    <StyledLabel htmlFor='title'>Título:</StyledLabel>
                    <StyledInput
                        onInput={e => setTaskToEdit({...taskToEdit, title: e.target.value})}
                        type='text'
                        name='title'
                        id='title' 
                        placeholder='¿Cómo se titula tu plan ahora?'
                        value={taskToEdit.title} />

                    <StyledLabel htmlFor='date'>Fecha:</StyledLabel>
                    <StyledInput
                        onInput={e => setTaskToEdit({...taskToEdit, date: e.target.value})}
                        type='text'
                        name='date'
                        id='date' 
                        placeholder='¿Qué día va a ser?'
                        value={taskToEdit.date} />
                        

                    <StyledLabel htmlFor='note'>Nota:</StyledLabel>
                    <StyledTextArea
                        onInput={e => setTaskToEdit({...taskToEdit, note: e.target.value})}
                        type='text'
                        name='note'
                        id='note' 
                        placeholder='¡Cuéntame tu plan!' 
                        value={taskToEdit.note} />

                    <StyledButton type='submit'>¡Modifica mi plan!</StyledButton>
                    
                </StyledForm>
            </StyledFormCont>
        </>
    );
};

const handleSubmit = async (event, taskToEdit, setTasks, setIsEditing) =>{
    event.preventDefault();

    const {_id} = taskToEdit;
    const response = await fetch(`http://localhost:3000/api/tasks/${_id}`, {
        method: 'PATCH',
        body: JSON.stringify(taskToEdit),
        headers: {
            Accept: '*/*',
            'Content-Type' : 'application/json'
        }
    });

    const data = await response.json();
    setTasks(data);
    setIsEditing(false);
};



export default EditTask;