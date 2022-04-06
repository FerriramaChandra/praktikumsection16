import styles from "./styles.module.css";

const ListItem = ({item, deleteTodo, handleCheckBoxChange}) => {

    return (
        <>
            <tr>
                <td className={styles.tdCheckbox}><input type="checkbox" checked={item.completed} onChange={() => {handleCheckBoxChange(item.id)}}/></td>
                <td className={styles.tdText} style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.title}</td>
                <td className={styles.tdSubmit}>
                    <button onClick={()=>{deleteTodo(item.id)}}>Hapus</button>
                </td>
            </tr>
        </>
    )
}

export default ListItem