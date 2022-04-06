import { useState } from "react";

import ListTodo from "./pages/ListTodo";
import TodoInput from "./pages/TodoInput";

const initialValue = [{
        id: 1,
        title: "Mengerjakan exercise",
        completed: true
    },
    {
        id: 2,
        title: "Mengerjakan Assignment",
        completed: false
    }
]

function Home () {

    const [data, setData] = useState (initialValue)

    const deleteTodo = (id) => {
        setData  ((oldData) => oldData.filter((item) => {
            return item.id !== id
        }))
    }

    const addTodo = (newTodo) => {
        const newTugas = {id : data[data.length - 1].id + 1, ... newTodo}
        setData((oldData) => [...oldData, newTugas])
    }

    const handleCheckBoxChange = (id) => {
        const newList = data.map(data => {
            if (data.id === id)
            return { ...data,completed:!data.completed }
        return data;
        })
        setData(newList)
    }

    return (
        <div>
            <TodoInput addTodo = {addTodo}/>
            <ListTodo data={data} deleteTodo={deleteTodo} handleCheckBoxChange={handleCheckBoxChange} />
        </div>
    )
}

export default Home