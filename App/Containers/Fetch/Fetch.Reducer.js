import { FetchType } from './Fetch.Action'
import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
	data: null,
	isFetching: false,
	error: false
});

/* ------------- Reducers ------------- */
export const reducer = createReducer(INITIAL_STATE, {
	[FetchType.USER_REQUEST]: (state, action) => {
		return {
			...state,
			data: null,
			isFetching: true,
			error: false
		}
	},
	[FetchType.LOCAL_REQUEST]: (state, action) => {
		return {
			...state,
			data: null,
			isFetching: true,
			error: false
		}
	},
	[FetchType.SUCCESS]: (state, action) => {
		return {
			...state,
			data: action.data,
			isFetching: false,
			error: false
		}
	},
	[FetchType.FAILURE]: (state, action) => {
		return {
			...state,
			data: action.error,
			isFetching: false,
			error: true
		}
	}
});