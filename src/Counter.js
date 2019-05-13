import React from 'react';
import {connect} from 'react-redux'

function Counter(props){
  console.log('in counter props are:', props)
  return(
    <div>
    <h1> I am a counter! </h1>
    <p> Count: {props.count}</p>
    <button onClick={props.onInrecementClick}> inrecrement </button>
    <button onClick={props.onDecrementClick}> decrement</button>
    </div>
  )
}

function mapStateToProps(state){
  console.log('mapStateToProps state is:', state)
  return{
    count: state.count
  }
}

function mapDispatchToProps(dispatch){
  return{
    onInrecementClick: () =>{
      console.log('clicking')
      const action = {type: 'INCREMENT'}
      dispatch(action)
    },

    onDecrementClick: ()=>{
      const action = {type: 'DECREMENT'}
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
