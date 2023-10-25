import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../store/actions/actions";
import TodoForm from "../pure/TodoForm";


const mapStateTopProps = (state) => {
// Not nessary 
};

const mapDispathToProps = (dispatch) =>  {
return{
    submit: (text) => {
     dispatch(addTodo(text))
    }
}
};

const TodoFormContainer = connect(mapStateTopProps, mapDispathToProps)(TodoForm)
export default TodoFormContainer;
