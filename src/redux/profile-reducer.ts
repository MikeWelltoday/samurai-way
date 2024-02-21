import {ActionType, ProfilePageType} from './state'

//========================================================================================
// 🎲 .T.Y.P.E.S. - .R.E.D.U.C.E.R.

export type ProfileReducerActionType = ReturnType<typeof profileUpdateNewPostTextAC>
    | ReturnType<typeof profileReducerAddPostAC>


//========================================================================================
// 🍌 .A.C.

export function profileUpdateNewPostTextAC(newText: string) {
    return {type: 'PROFILE-UPDATE-NEW-POST-TEXT', payload: {newText}} as const
}

export function profileReducerAddPostAC() {
    return {type: 'PROFILE-ADD-POST', payload: {}} as const
}

//========================================================================================
// 🧰 .R.E.D.U.C.E.R.

export function profileReducer(state: ProfilePageType, action: ActionType): ProfilePageType {

    switch (action.type) {

        case 'PROFILE-UPDATE-NEW-POST-TEXT': {
            state.newPostText = action.payload.newText
            return state
        }

        case 'PROFILE-ADD-POST': {
            state.posts.push({id: 5, message: state.newPostText, likesCount: 0})
            state.newPostText = ''
            return state
        }

        default: {
            return state
        }

    }

}




