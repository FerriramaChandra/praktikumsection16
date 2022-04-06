import { configureStore } from "@reduxjs/toolkit";

import dataTodos from "./todos";

const store = configureStore ({
    reducer: {
        Todos: dataTodos
    }
})

export default store;