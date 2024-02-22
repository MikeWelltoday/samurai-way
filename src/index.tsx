import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {store} from './redux/redux-store'
import {Provider} from 'react-redux'

//=============================================================================

function rerenderEntireTree() {

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
}

rerenderEntireTree()

// передаем функцию RENDER приложения через callBack в state/store
store.subscribe(rerenderEntireTree)