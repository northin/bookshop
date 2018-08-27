import api from '../api'
import * as types from './types.js'

import person from './action/person.js'
import auth from './action/auth.js'
import trade from './action/trade.js'
import common from './action/common.js'
const actions = {
  ...person,
  ...auth,
  ...trade,
  ...common,
}

export default actions
