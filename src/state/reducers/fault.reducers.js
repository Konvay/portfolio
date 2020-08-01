import { createReducer} from '@reduxjs/toolkit'

import {
    loginUser
} from '../actions/fault.actions'

const initialState = {
    isFetching: false
}

const authReducer = createReducer(initialState, {
    ["OHAI"]: (dispatch, action) => {
        dispatch(() => loginUser())
    }
});

export default authReducer;