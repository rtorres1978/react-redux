import React from "react";
import { connect } from "react-redux";
import TodoList from "../pure/TodoList";
import { toggleTodo } from "../../store/actions/actions";

// Filter Todo List filtrando la lista de tareas

const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
         return todos;
    case 'SHOW_ACTIVE':
         return todos.filter((todo) => !todo.completed);
    case 'SHOW_COMPLETED':
         return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};

const mapStateTopProps = (state) => {
  return {
    todos: filterTodos(state.todosState, state.filterState)
  };
};

const mapDispathToProps = (dispatch) =>  {
return {
 onTodoClick: (id) => {
    dispatch(toggleTodo(id))
 }
}
};

// We connect State & Dispach to TodoList`s Props
const TodosContainer = connect(mapStateTopProps, mapDispathToProps)(TodoList); // vamos a conetarnos 

export default TodosContainer
