import { useState } from "react";
import styles from "./styles.module.css";

import { useDispatch } from "react-redux";
import { submit } from "../store/todos";


function TodoInput (props) {

    const [input, setInput] = useState(
        {
            title: "",
            completed: false
        }
    )

    const dispacth = useDispatch();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formIsNotEmpty = input.title;
        if (formIsNotEmpty) {
            dispacth(submit(input))
            setInput(
                {
                    title: "",
                    completed: false
                }
            )
        }
        else {
            alert("Data masih Kosong")
        }
    }
    
    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div>
            <div className={styles.container}>
                <input type="text" placeholder="Add Todo..." value={input.title} name="title" onChange={(e) => {onChange(e)}} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
export default TodoInput