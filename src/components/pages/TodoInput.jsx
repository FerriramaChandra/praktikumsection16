import { useState } from "react";
import styles from "./styles.module.css";

function TodoInput (props) {
    
    const [data, setData] = useState(
        {
            id: "",
            title: "",
            completed: false
        }
    )
    
    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = data.title;
        if (formIsNotEmpty) {
            const newData = {
                title: data.title
            }

            props.addTodo(newData);
            setData ({
            title: ""
            })
        } else {
            alert("Data masih Kosong")
        }
    }

    return (
        <div>
            <div className={styles.container}>
                <input type="text" placeholder="Add Todo..." value={data.title} name="title" onChange={(e) => {onChange(e)}} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
export default TodoInput