import React, { Component } from 'react';
//we want this component to know about redux.
//to do that, we need some help... or some glue
// the glue is react-redux! We need the connect function

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateFrozen from '../actions/frozenInvUpdate'


class FrozenDept extends Component {
    increment = (operation, index) =>{
        this.props.updateFrozen(operation, index);
    }
    render() {
        const frozenInventory = this.props.frozenData.map((item, i)=> {
            return (
                <div key={i}>
                   <li>{item.food}: {item.quantity}</li> 
                   <input type="button" onClick={()=>{this.increment('+', i)}} value="+"></input>
                   <input type="button" onClick={()=>{this.increment('-', i)}} value="-"></input>
                </div>
            )
        })
        
        return(
            <div>
                <h1>The frozen food department</h1>
                <ul>
                    {frozenInventory}  
                </ul>               
            </div>
        )
    }
}


// mapStateToProps takes 1 arg, "state", and that is the rootReducer/ STore
function mapStateToProps(state){
    // mapStateToProps returns an object with:
    // property is the local prop name to this component
    // value will be the property in the root reducer, i.e. a piece of the store
    return {
        frozenData: state.frozen
    }
}

// mapDispatchToProps is how we tie our component to the dispatch
// It takes 1 arg: dispatch
function mapDispatchToProps(dispatch){
    // this function returns bindActionCreators
    // and we hand bindActionCreators an object:
    // each property will be a local prop
    // each value will be a function that is dispatch when run 
    // 2nd arg fro bindActionCreators is the dispatch
    return bindActionCreators({
        updateFrozen: updateFrozen
    }, dispatch)
}

// connect takes 2 args, the first one is a function that is going to map
// a piece of redux state to this component's props
// 2nd arg to connect: mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);