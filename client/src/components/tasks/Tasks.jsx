import { StyledButton, StyledButtons, StyledH1, StyledH2, StyledHr, StyledP, StyledTask, StyledTasksCont, StyledTitle, StyledTitleCont } from "./styles";

const Tasks = ({tasks, setTasks, setIsEditing, setTaskToEdit})=>{

    console.log('TASKS', tasks);

    if(tasks.length === 0) return (
        <StyledTasksCont>
            <StyledH1>No tienes ningún plan</StyledH1>
        </StyledTasksCont>
    );

    return(
        <>
        <StyledTitleCont>
            <StyledTitle>Mis planes</StyledTitle>
            <StyledHr></StyledHr>
        </StyledTitleCont>
        <StyledTasksCont>

            
            
                {tasks.map(task =>(
                    <StyledTask key={task._id}>
                        <StyledH2>
                            {task.title}
                        </StyledH2>
                        <StyledP>
                            {task.date}
                        </StyledP>
                        <StyledP>
                            {task.note}
                        </StyledP>
                        <StyledButtons>
                            <StyledButton onClick={()=>deleteTask(task._id, setTasks)}>Eliminar plan</StyledButton>
                            <StyledButton onClick={()=> {
							setIsEditing(true);
							setTaskToEdit(task);
						}}>Modificar el plan</StyledButton>
                        </StyledButtons>
                    </StyledTask>
                ))}
            
        </StyledTasksCont>
        </>
    )
};

const deleteTask = async (id, setTasks) =>{

    const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: 'DELETE',
    });

    const data = await response.json();
    setTasks(data);
}

export default Tasks;