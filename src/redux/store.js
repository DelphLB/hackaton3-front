import { createStore, compose, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';

const rootReducers = combineReducers({
    user: userReducer,
});

const store = createStore(
    rootReducers,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
