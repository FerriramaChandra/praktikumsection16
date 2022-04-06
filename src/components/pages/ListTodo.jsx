import styles from "./styles.module.css";

import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, CheckTodo } from "../store/todos";

const ListTodo = (handleCheckBoxChange) => {

    const dispacth = useDispatch();


    const HandleDelete = (todoIdx) => {
        dispacth(deleteTodo(todoIdx))
    }

    const HandleCheck = (todoIdx) => {
        dispacth(CheckTodo(todoIdx))
    }

    const Todos = useSelector((state) => state.Todos.value)
    console.log(Todos)
    return (
        <div>
            <table style={{borderCollapse:"collapse"}}>
                <tbody>
                    {Todos.map((todo, todoIdx) =>(
                        <tr key={todoIdx}>
                            <td className={styles.tdCheckbox}><input type="checkbox" checked={todo.completed} onChange={() => HandleCheck(todoIdx)}/></td>
                            <td className={styles.tdText} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.title}</td>
                            <td className={styles.tdSubmit}>
                                <button onClick={()=>{HandleDelete(todoIdx)}}>Hapus</button>
                            </td>
                        </tr>
                    ) )}
                </tbody>
            </table>
        </div>
    )
}

export default ListTodo