import {combineReducers} from 'redux';
import { appReducer } from './appReducer';
import { projectReducer } from './projectReducer';
export const rootReducer = combineReducers({
    app: appReducer,
    project: projectReducer
})