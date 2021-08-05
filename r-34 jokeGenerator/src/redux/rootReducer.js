import { jokeReducer, JOKE_KEY } from "./jokeRedux/joke.reducer";
import {combineReducers} from 'redux'


let rootReducer = combineReducers({
    [JOKE_KEY]: jokeReducer
})

export {rootReducer}