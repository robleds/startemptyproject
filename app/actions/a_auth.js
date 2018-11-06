import * as types from '../actions/types'

export function signIn(username, password) {
    return (dispatch, getState) => {
        dispatch({
            type: types.SET_LOGIN,
            payload: {
                success: true
            }
        })
    }
}

export function signOut() {
    return (dispatch, getState) => {
        dispatch({
            type: types.SET_LOGIN,
            payload: {
                success: false
            }
        })
    }
}