import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCounter } from '../../actions/index';
// import { bindActionCreators } from 'redux';

class RemoveCounter extends Component {
    // constructor() {
    //     super();
    // }

    onClick = event => {
        event.preventDefault();
        //dispatch an action to the store (the action being removeCounter)
        this.props.dispatch(removeCounter());
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
                                Remove
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
        //bind the action, not the component
        // {actions: bindActionCreators(removeCounter, dispatch)}
        {removeCounter: () => dispatch(removeCounter())}
    );
}

/* connecting this >component< to our redux 
store that has our state */
export default connect(mapDispatchToProps)(RemoveCounter);