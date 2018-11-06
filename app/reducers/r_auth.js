import * as types from '../actions/types'

export function logged(state = false, action) {
    switch (action.type) {
      case types.SET_LOGIN:
        return action.payload.success
      default:
        return state
    }
}