import { createReducer} from '@reduxjs/toolkit'

import {
    getItemList
} from '../actions/fault.actions'

const initialState = {
    isFetching: false
}

const authReducer = createReducer(initialState, {
    ["OHAI"]: (dispatch, action) => {
        dispatch(() => getItemList())
    }
});

export default authReducer;