import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    // constructor(){
    //     super();
    // }

    render() {
        return(
            <div className='container'>
                <div className='notification'>
                    <h1>
                        {this.props.count}
                    </h1>
                </div>
            </div>
        )
    }
}

//get state from the store and store it in props
const mapStateToProps = (state) => {
    return (
        // return an object with value of what we would like to call it
        // using the reducer of choice
        {count: state.counterReducer.counter}
    );
}

//connect the Counter component to the store
export default connect(mapStateToProps)(Counter);