import {ActionType, ProfilePageType} from './state'
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




