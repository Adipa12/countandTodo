import { useEffect, useRef, useState } from "react";

export const FocusElement = () =>{
    const userName = useRef("");
    const password = useRef("");

    const[data,setData] = useState([]);
    const divRef = useRef(null); // Create a reference to the div element

    // Function to handle form submission
    function handleSubmit(e){
        e.preventDefault()
        let obj = {
            userName: userName.current.value,
            password: password.current.value
        }
        setData([...data, obj]); // Update data state with the new object
    }

      // Function to handle background color change when clicking on the list div
  const handleDivClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor =
        divRef.current.style.backgroundColor === "aqua" ? "lightcoral" : "aqua";
    }
  };
    useEffect(()=>{
        userName.current.focus();
    },[])
    return (
        <div  ref={divRef} 
        onClick={handleDivClick}
        style={{
            marginTop: "20px",
            padding: "10px",
            cursor: "pointer",
            backgroundColor: "aqua", // Initial background color
          }}
          >
            <h2>Focusable input Fields</h2>
            <form onSubmit={handleSubmit}>
                <input ref={userName} placeholder="Enter the useName"/>
                <input ref={password} placeholder="Enter the password"/>
                <input type="submit"/>
            </form>
            <div>
                <ul>
                    {
                        data.map((ele,index)=>(
                            <li key={index}>
                                UseName : {ele.userName} , 
                                Password : {ele.password}                               
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}