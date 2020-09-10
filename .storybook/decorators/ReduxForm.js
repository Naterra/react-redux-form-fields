import React from 'react';
import {reducer as formReducer, reduxForm} from "redux-form";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

let ReduxForm = ({ story }) => {
    const reducers = { form: formReducer };
    const reducer = combineReducers(reducers);
    const store = createStore(reducer);
    const Test = reduxForm({ form: 'withReduxForm' })(story);

    return (
        <Provider store={store}>
            <form>
                <Test />
            </form>
        </Provider>
    );
};

export default ReduxForm;
