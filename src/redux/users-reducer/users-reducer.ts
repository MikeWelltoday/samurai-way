//========================================================================================
// 🎲 .T.Y.P.E.S. - .I.N.I.T.I.A.L.S.T.A.T.E.

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
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
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Dmitriy',
            status: 'programmer',
            location: {city: 'Obninsk', country: 'Russia'}
        },
        {id: 2, followed: false, fullName: 'Anna', status: 'doctor', location: {city: 'Obninsk', country: 'Russia'}},
        {
            id: 3,
            followed: true,
            fullName: 'Mikhail',
            status: 'programmer',
            location: {city: 'Obninsk', country: 'Russia'}
        }
    ]
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