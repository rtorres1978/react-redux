// El FilterContainer es el encardo de depachar Filter
import React from "react";
import { connect } from "react-redux";
import Filter from "../pure/Filter";
import { setVisibilityFilter } from "../../store/actions/actions";

const mapStateTopProps = (state, ownProps) => {
     return {
         active: ownProps.filter === state.filterState
     }
}

const mapDispathToProps = (dispatch, ownProps) => {
  return{
        onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
       }
  }
}

const FilterContainer  = connect(mapStateTopProps, mapDispathToProps)(Filter);
export default FilterContainer

