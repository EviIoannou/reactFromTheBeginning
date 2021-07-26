import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateProduce from '../actions/produceInvUpdate'

class ProduceDept extends Component {
    increment = (qChange, index) =>{
        this.props.updateProduce(qChange, index);
    }
    
    render() {
        const produceInventory = this.props.produceData.map((item, i)=> {
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
                <h1>The produce food department</h1>
                <ul>
                    {produceInventory}  
                </ul>               
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        produceData: state.produce
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateProduce: updateProduce
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProduceDept);