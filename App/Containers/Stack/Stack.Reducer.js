import { StackType } from './Stack.Action'
import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
	data: null,
	isFetching: false,
	error: false
});

export const reducer = createReducer(INITIAL_STATE, {
	[StackType.SITE]: (state, action) => {
		return {
			...state,
			data: null,
			isFetching: true,
			error: false
		}
	},
	[StackType.SUCCESS]: (state, action) => {
		return {
			...state,
			data: action.data,
			isFetching: false,
			error: false
		}
	}
	,
	[StackType.FAILURE]: (state, action) => {
		return {
			...state,
			data: action.error,
			isFetching: false,
			error: true
		}
	}
});