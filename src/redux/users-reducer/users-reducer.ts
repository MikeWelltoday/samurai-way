//========================================================================================
// 🎲 .T.Y.P.E.S. - .I.N.I.T.I.A.L.S.T.A.T.E.

export type PhotosType = {
    small: string | null
    large: string | null
}

export type UsersType = {
    id: number
    name: string
    status: string | null
    photos: PhotosType
    followed: boolean
    uniqueUrlName: string | null
}

export type UserPageType = {
    users: UsersType[]
}

//========================================================================================
// 🎲 .T.Y.P.E.S. - .R.E.D.U.C.E.R.

export type UsersReducerActionType = ReturnType<typeof usersFollowToggleAC> | ReturnType<typeof usersSetUsersAC>

//========================================================================================
// 🍌 .A.C.

export function usersSetUsersAC(users: UsersType[]) {
    return {type: 'USERS-SET-USERS', payload: {users}} as const
}

export function usersFollowToggleAC(userId: number) {
    return {type: 'USERS-FOLLOW-TOGGLE', payload: {userId}} as const
}


//========================================================================================
// 🧰 .R.E.D.U.C.E.R.

const initialState: UserPageType = {
    users: []
}

export function usersReducer(state: UserPageType = initialState, action: UsersReducerActionType): UserPageType {

    switch (action.type) {

        case'USERS-SET-USERS': {
            return {...state, users: [...state.users, ...action.payload.users]}
        }

        case'USERS-FOLLOW-TOGGLE': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: !u.followed} : u)
            }
        }

        default: {
            return state
        }
    }

}