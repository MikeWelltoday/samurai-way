import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {DialogPropsType} from './components/main/messeges/dialog/Dialog'

//============================================================================================================
// DATA TYPES

export type ChatDataType = {
    id: string, text: string
}

export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

export type MessagesDataType = {
    dialogsData: DialogPropsType[]
    chatData: ChatDataType[]
}

export type DataTypes = {
    postsData: PostsDataType[]
    messagesData: MessagesDataType
}

//============================================================================================================
//DATA

const dialogsData: DialogPropsType[] = [
    {id: '1', person: 'Anna'},
    {id: '2', person: 'Dima'},
    {id: '3', person: 'Mike'},
    {id: '4', person: 'Roma'},
    {id: '5', person: 'Margo'}
]

const chatData: ChatDataType[] = [
    {id: '1', text: 'Hello friend'},
    {id: '2', text: 'How are you?'},
    {id: '3', text: 'I\'ve got story to tell'}
]

const postsData: PostsDataType[] = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It is my first post', likesCount: 3},
    {id: 3, message: 'Yo', likesCount: 1},
    {id: 4, message: 'Yo', likesCount: 5}
]

const data: DataTypes = {
    postsData,
    messagesData: {
        dialogsData,
        chatData
    }
}

//============================================================================================================


ReactDOM.render(
    <BrowserRouter>
        <App data={data}/>
    </BrowserRouter>
    ,
    document.getElementById('root')
)