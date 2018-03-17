import { ListType } from './List.Action'
import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
  data: null,
  isFetching: false,
  error: false
})

export const reducer = createReducer(INITIAL_STATE, {
  [ListType.SITE]: (state, action) => {
    return {
      ...state,
      data: null,
      isFetching: true,
      error: false
    }
  },
  [ListType.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.data,
      isFetching: false,
      error: false
    }
  },
  [ListType.FAILURE]: (state, action) => {
    return {
      ...state,
      data: action.error,
      isFetching: false,
      error: true
    }
  }
})
