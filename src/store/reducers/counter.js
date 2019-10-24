import * as actionsTypes from '../actions';
const initialState = {
    counter: 0,
}
const reducer = (state = initialState, action) => {
    
    /*if(action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1,
        }
    }if(action.type === 'ADD') {
        return {
            ...state, 
            counter: state.counter + action.value,
        }
    }if(action.type === 'DECREMENT') {
        return {
            ...state, 
            counter: state.counter - 1,
        }
    }if(action.type === 'SUBTRACT') {
        return {
            ...state, 
            counter: state.counter - action.value,
        }
    }*/
    switch(action.type) {
        case actionsTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case actionsTypes.ADD:
            return {
                ...state, 
                counter: state.counter + action.value,
            }
        case actionsTypes.DECREMENT:
            return {
                ...state, 
                counter: state.counter - 1,
            }
        case actionsTypes.SUBTRACT:
            return {
                ...state, 
                counter: state.counter - action.value,
            }   
    }
    return state;
}

export default reducer;