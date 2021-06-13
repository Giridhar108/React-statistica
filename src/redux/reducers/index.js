import { combineReducers } from 'redux'

import statistics from './statistics'
import devices from './devices'
import transformData from './transformData'

const rootReducer = combineReducers({
  statistics,
  devices,
  transformData,
})

export default rootReducer;