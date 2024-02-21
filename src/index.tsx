import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {store} from './redux/redux-store'

//=============================================================================

function rerenderEntireTree() {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree()

// передаем функцию RENDER приложения через callBack в state/store
store.subscribe(rerenderEntireTree)