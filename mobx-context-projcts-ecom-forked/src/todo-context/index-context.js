import React, { useContext, useReducer } from 'react'
import  todoReducer  from './todo-reducer';
import TodoContext from './todo-context';
const MainContext = (props) => {
    const initialState = {
        todos: [], //this name must be same as the  reducer function return name 'todos'
    }
    const [states, dispatch]=useReducer(todoReducer, initialState); //states value is the initialState
    //add todo 
    const addTodo = (todo) => {
        dispatch({
            type: 'ADD_TODO',
            payload:todo
        })
    }
    //toggle todo
    const toggleTodo = (id) => {
        // console.log(id,"toggle id context")
        dispatch({
            type: 'TOGGLE_TODO',
            payload:id
        })
    }
    //remove todo
    const removeTodo = (id) => {
        dispatch({
            type: 'REMOVE_TODO',
            payload:id
        })
    }

  return (
    <> 
    MainContext
  <TodoContext.Provider value={{
        todos: states.todos,
        addTodo,
        toggleTodo,
        removeTodo
    }}>
        {props.children}
    </TodoContext.Provider>
    </>
  )
}

export { MainContext };

//MainContext is the provider and useGlobalState is the consumer
//MainContext which is implemented in App.js /Router/index.js/ or any other component that needs to use the global state
//useGlobalState which is used to get global fn and state from MainContext