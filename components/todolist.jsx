import { useState } from "react";

export const TodoElement = ()=>{

    const [todos, setTodos] = useState({"todo":"","user":"","isadmin":false,});
    const [data, setData] = useState([])

    // Handle change for multiple inputs and checkbox
    const handleInputChange = (e) =>{
        const{name,value,type,checked} = e.target;
        setTodos({
            ...todos,
            [name]: type ==="checkbox" ? checked : value,
        });
    };

   // Add the data to the array when the form is submitted
    const handleSubmit = (e) =>{
        e.preventDefault() // Prevent page reload on form submission
        if(todos.todo.trim() !== "" && todos.user.trim() !== "")
        {
            setData([...data,todos]) // Add the todos object to the array
            setTodos({todo:"",user:"",isadmin: false});// Clear form inputs
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
            <h2>Form with Checkbox and Array</h2>
            <input type="text" name="todo" value={todos.todo} onChange={handleInputChange} placeholder="enter Todo task"/>
            <input type="text" name="user" value={todos.user} onChange={handleInputChange} placeholder="enter User Name"/>
            <input type="checkbox" name="isadmin" checked={todos.isadmin} onChange={handleInputChange} placeholder="select Admin"/>

            <button type="submit">Submit</button>
            </form>
            {/* Display stored data */}
            <div>
            <h3>Stored Data:</h3>
                <ul>
                    {
                        data.map((item, index)=>(
                            <li key={index}>
                                todo: {item.todo},
                                 User: {item.user},
                                 IsAdmin:{item.isadmin ? "Yes" : "No"
                                 }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    ) 
}