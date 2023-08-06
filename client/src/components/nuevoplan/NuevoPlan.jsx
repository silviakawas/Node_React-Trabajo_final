import { useEffect, useState } from "react";
import EditTask from "../editTask/EditTask";
import TaskForm from "../taskForm/TaskForm";
import Tasks from "../tasks/Tasks";

const NuevoPlan = ()=>{

    const [isEditing, setIsEditing] = useState(false);
	const [taskToEdit, setTaskToEdit] = useState({
		id: '',
		title: '',
		date: '',
		note: ''
	});

	const [tasks, setTasks] = useState([]);

	useEffect(()=>{
		getAllTasks(setTasks);
	}, []);

    return(
        <>
            {isEditing ? (
					<EditTask
						setTasks = {setTasks}
						taskToEdit={taskToEdit}
						setTaskToEdit={setTaskToEdit}
						setIsEditing={setIsEditing}
					/>) : (
					<TaskForm setTasks={setTasks}/>
				)};

				<Tasks tasks={tasks} setTasks={setTasks} setIsEditing={setIsEditing} setTaskToEdit={setTaskToEdit}/>

        </>
    );
};

const getAllTasks = async setTasks =>{

	const response = await fetch('http://localhost:3000/api/tasks');

	const data = await response.json();

	setTasks(data);
}

export default NuevoPlan;