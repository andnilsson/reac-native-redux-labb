const Actions = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    STARTED_ASYNC: 'sds',
    FINISHED_ASYNC: 'sdsdsd'
}

export const ActionCreators = {
    increment: () => { return { type: Actions.INCREMENT } },
    decrement: () => { return { type: Actions.DECREMENT } },
    startedAsync: () => { return { type: Actions.STARTED_ASYNC } },
    finishedAsync: () => { return { type: Actions.FINISHED_ASYNC } },
    incrementAsync: () => function(getState, dispatch){
        dispatch(this.startedAsync());
        dispatch(this.finishedAsync());
    }
}

export const counter = (state = {
    count: 0,
    list: [],
    accoun:{},
    isLoading: false
}, action) => {
    switch (action.type) {
        case Actions.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1,
                list: [...state.list, action.payload],
                
            });
        case Actions.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            });
        default: return state
    }
}