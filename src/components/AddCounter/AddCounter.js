import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter } from '../../actions/index';
// import { bindActionCreators } from 'redux';  

class AddCounter extends Component {
    // constructor() {
    //     super();
    // }

    onClick = event => {
        event.preventDefault();
        this.props.dispatch(addCounter());
    }

    render() {
        return (
            <div ClassName="container">
                <form>
                    <div className="field is-grouped">
                        <div className="control">
                            <button 
                                className="button is-primary"
                                onClick={this.onClick}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

/* dispatch an action to the store or push state to the store
tell the store an action has happened from the view */
//store it as a prop and then push it to the store
const mapDispatchToProps = (dispatch) => {
    return (
        //need to bind the actions within the component and 
        //pass dispatch as a property to our component
        // {actions: bindActionCreators(addCounter, dispatch)}
        {addCounter: () => dispatch(addCounter())}
    );
}

/* connecting this component to our redux 
store that has our state */
export default connect(mapDispatchToProps)(AddCounter);