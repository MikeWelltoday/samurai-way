import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import {BrowserRouter} from 'react-router-dom'
import {store} from './redux/redux-store'
import {Provider} from 'react-redux'

//=============================================================================

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App
                store={store}
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)

