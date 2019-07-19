import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import postsReducer from './reducers/posts'
import commentsReducer from './reducers/comments'

const reducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store