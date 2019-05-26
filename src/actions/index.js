import { 
        ADD_COUNTER, 
        REMOVE_COUNTER 
    } from './constants';

export const addCounter = () => {
    return (
        {
            type: ADD_COUNTER,
            payload: 1
        }
    )
}

export const removeCounter = () => {
    return (
        {
            type: REMOVE_COUNTER,
            payload: 1
        }
    )
}