// increment ID for Todos
let nextTodoID = 0; // -> va aumentando

// Action Types:
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// creamos una funcion que devuelve una accion

/**
 * 
 * @param {string} text 
 * @returns sction ADD_TODO
 */
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
        id: nextTodoID ++, // se incrementa
        text
    }
  }
}

// funcion 2 

/**
 * 
 * @param {number} id 
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id) => {
return{
 type: TOGGLE_TODO,
 payload: {
  id
 }

}
}

/**
 * 
 * @param {String} filter 
 * @returns SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
return {
 type: SET_VISIBILITY_FILTER,
 payload: {
    filter                
 }
 
}

}