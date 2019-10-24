import * as actionsTypes from './actions';
const initialState = {
    counter: 0,
    results: [],
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
        case actionsTypes.ADDRESULT:
            const newResult = {
                id: new Date(),
                value: state.counter,
            }
            return {
                ...state, 
                results: [...state.results, newResult],
            }
        case actionsTypes.DELETERESULT:
            const updateResults = state.results.filter(result => {
                return result.id !== action.value
            })
            console.log(action.value);
            return {
                ...state, 
                results: updateResults
            }
    }
    return state;
}

export default reducer;