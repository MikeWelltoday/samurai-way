import React from 'react'
import './App.css'

// Components

// images
import myimage from './images/content-iamge.webp'

const App = () => {
    return (
        <div className="app-wrapper">

            <header className={'header'}>
                <img alt={'sry'} src={'#'}/>
            </header>

            <nav className={'nav'}>
                <div>
                    <a href={'#'} target={'_blank'}>Profile</a>
                </div>
                <div>
                    <a href={'#'} target={'_blank'}>Messages</a>
                </div>
                <div>
                    <a href={'#'} target={'_blank'}>News</a>
                </div>
                <div>
                    <a href={'#'} target={'_blank'}>Music</a>
                </div>
                <div>
                    <a href={'#'} target={'_blank'}>Settings</a>
                </div>

            </nav>

            <main className={'content'}>
                <div>
                    <img alt={'sry'} src={myimage}/>
                </div>
                <div>
                    avatar+description
                </div>
                <div>
                    my posts
                    <div>
                        New Post
                    </div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>

            </main>

        </div>
    )
}
export default App

