import React, { useRef } from "react";
import PropTypes from 'prop-types';

const Todoform = ({submit}) => {
 const newText = useRef();

  return (
  <div>
        <h2>Create Your ToDos</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          // eslint-disable-next-line no-undef
          submit(newText.current.value);
          newText.current.value = ''; // limpiamos el capmpo
        }}>
       <input type='text' ref={newText} />
        <button type='submit'>
        Create Todo
        </button>
        </form>
  </div>
  );
};


Todoform.propTypes = {
submit: PropTypes.func.isRequired
}
export default Todoform;
