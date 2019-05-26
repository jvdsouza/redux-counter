import { 
    ADD_COUNTER, 
    REMOVE_COUNTER 
} from '../actions/constants';

const initialState = {
    counter: 0
}

const counterReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_COUNTER:
            return {...state, counter: state.counter += action.payload }
        case REMOVE_COUNTER:
            return {...state, counter: state.counter -= action.payload}
        default:
            return state;
    }
}

export default counterReducer