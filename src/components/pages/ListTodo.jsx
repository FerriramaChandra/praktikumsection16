import ListItem from "./ListItem"
import styles from "./styles.module.css";

import { useSelector, useDispatch } from "react-redux";
import todos, { deleteTodo } from "../store/todos";


const ListTodo = (handleCheckBoxChange) => {

    const dispacth = useDispatch();

    const deleteTodo = () => {
        dispacth(deleteTodo())
    }

    const Todos = useSelector((state) => state.Todos)

    console.log(Todos)

    return (
        <div>
            <table style={{borderCollapse:"collapse"}}>
                <tbody>
                    {Todos.map((todo) =>(
                        <tr>
                            <td className={styles.tdCheckbox}><input type="checkbox" checked={todos.completed} onChange={() => {handleCheckBoxChange(todos.id)}}/></td>
                            <td className={styles.tdText} style={{textDecoration: todos.completed ? 'line-through' : 'none'}}>{todos.title}</td>
                            <td className={styles.tdSubmit}>
                                <button onClick={()=>{deleteTodo(todos.id)}}>Hapus</button>
                            </td>
                        </tr>
                    ) )}
                </tbody>
            </table>
        </div>
    )
}

export default ListTodo