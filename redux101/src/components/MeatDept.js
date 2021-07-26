import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateMeat from '../actions/meatInvUpdate'

class MeatDept extends Component {
    increment = (qChange, index) =>{
        this.props.updateMeat(qChange, index);
    }
    
    render() {
        const meatInventory = this.props.meatData.map((item, i)=> {
            return (
                <div key={i}>
                   <li>{item.food}: {item.quantity}</li> 
                   <input type="button" onClick={()=>{this.increment(1, i)}} value="+"></input>
                   <input type="button" onClick={()=>{this.increment(-1, i)}} value="-"></input>
                </div>
            )
        })
        
        return(
            <div>
                <h1>The meat food department</h1>
                <ul>
                    {meatInventory}  
                </ul>               
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        meatData: state.meat
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateMeat: updateMeat
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);