import { call, put } from 'redux-saga/effects'
import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  site: ['site'],
  success: ['data'],
  failure: ['error']
})

export const ListType = Types
export const ListAction = Creators
export const ListFunction = {
  getList
}

function* getList(api, action) {
  const { site } = action
  const response = yield call(api.getList, site)

  if (response.ok && response.status === 200) {
    yield put(ListAction.success(response.data))
  } else {
    yield put(ListAction.failure(JSON.stringify(response.data)))
  }
}
