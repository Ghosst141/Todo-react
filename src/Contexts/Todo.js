import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [
    ],
    addtodo: (todo)=>{},
    updatetodo: (id,todo)=>{},
    deletetodo: (id)=>{},
    todocomplete:(id)=>{}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;