import React from 'react'
import {StoreType} from './redux/store'

//========================================================================================

export const StoreContext = React.createContext({} as StoreType)

//========================================================================================

type ProviderPropsType = {
    // ! проблема с типизацией !
    // store: StoreType
    store: any
    children: React.ReactNode
}

export const Provider = (props: ProviderPropsType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
