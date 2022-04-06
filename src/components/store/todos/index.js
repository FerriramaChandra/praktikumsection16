import { createSlice } from "@reduxjs/toolkit";

const initialValue = [{
    id: 1,
    title: "Mengerjakan exercise",
    completed: true
}, {
    id: 2,
    title: "Mengerjakan Assignment",
    completed: false
}]


const dataTodos = createSlice ({
    name: "Todos",
    initialValue,
    reducers : {
        submit (state, action) {
            state.id = action.payload[0].value
            state.title = action.payload[1].value
            state.completed = action.payload[2].value
        },
        deleteTodo (state, action) {
            state.id = ""
            state.title = ""
            state.completed = false
        }
    }
});

export const { submit, deleteTodo } = dataTodos.actions;

export default dataTodos.reducer;