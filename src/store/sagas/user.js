import { put, call, takeEvery } from 'redux-saga/effects'
import { visitorRegister, userRegister, userLogin } from '../../services/user'

const sagas = {
  * visitorRegister({ payload, callback }) {
    const result = yield call(visitorRegister, payload)
    if (callback) callback(result)
  },
  * userRegister({ payload, callback }) {
    const result = yield call(userRegister, payload)
    if (callback) callback(result)
  },
  * userLogin({ payload, callback }) {
    const result = yield call(userLogin, payload)
    if (callback) callback(result)
  },



}


export default Object.keys(sagas).map(item => {
  return function * s() {
    yield takeEvery(item, function *(args) {
      try {
        yield sagas[item](args)
      } catch (e) {
        console.log(e)
      }
    })
  }
})
