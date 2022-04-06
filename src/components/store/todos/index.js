import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    value :
    [{
        title: "Mengerjakan exercise",
        completed: true
    }, {
        title: "Mengerjakan Assignment",
        completed: false
    }]
}


export const dataTodos = createSlice ({
    name: "Todos",
    initialState,
    reducers: {
        submit: (state, action) => {
            const newData = action.payload
            state.value = [...state.value, newData]
        },
        deleteTodo: (state, action) => {
            const todoIdx = action.payload
            state.value.splice(todoIdx, 1)
        },
        CheckTodo: (state, action) => {
            const todoIdx = action.payload
            state.value[todoIdx].completed = !state.value[todoIdx].completed
        }
    }
});

export const { submit, deleteTodo, CheckTodo } = dataTodos.actions;

export default dataTodos.reducer;