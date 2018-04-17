import {combineReducers} from 'redux'
import {answerReducer,currentQReducer} from './ansReducer'
import {getQuestionsReducer} from './questionsReducer'

export default combineReducers({answerReducer,currentQReducer,getQuestionsReducer})