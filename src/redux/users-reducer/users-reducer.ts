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
    pageSize: number
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

//========================================================================================
// 🎲 .T.Y.P.E.S. - .R.E.D.U.C.E.R.

export type UsersReducerActionType =
    ReturnType<typeof usersFollowToggleAC>
    | ReturnType<typeof usersSetUsersAC>
    | ReturnType<typeof usersSetCurrentPageAC>
    | ReturnType<typeof usersSetTotalUsersCountAC>
    | ReturnType<typeof usersIsFetchingToggleAC>

//========================================================================================
// 🍌 .A.C.

export function usersSetUsersAC(users: UsersType[]) {
    return {type: 'USERS-SET-USERS', payload: {users}} as const
}

export function usersFollowToggleAC(userId: number) {
    return {type: 'USERS-FOLLOW-TOGGLE', payload: {userId}} as const
}

export function usersSetCurrentPageAC(newPageNumber: number) {
    return {type: 'USERS-SET-CURRENT-PAGE', payload: {newPageNumber}} as const
}

export function usersSetTotalUsersCountAC(newTotalUsersCount: number) {
    return {type: 'USERS-SET-TOTAL-USERS-COUNT', payload: {newTotalUsersCount}} as const
}

export function usersIsFetchingToggleAC(isFetchingMode: boolean) {
    return {type: 'USERS-isFETCHING-TOGGLE', payload: {isFetchingMode}} as const
}


//========================================================================================
// 🧰 .R.E.D.U.C.E.R.

const initialState: UserPageType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export function usersReducer(state: UserPageType = initialState, action: UsersReducerActionType): UserPageType {

    switch (action.type) {

        case'USERS-SET-USERS': {
            return {...state, users: action.payload.users}
        }

        case'USERS-FOLLOW-TOGGLE': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: !u.followed} : u)
            }
        }

        case'USERS-SET-CURRENT-PAGE': {
            return {...state, currentPage: action.payload.newPageNumber}
        }
        case 'USERS-SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.payload.newTotalUsersCount}
        }

        case 'USERS-isFETCHING-TOGGLE': {
            return {...state, isFetching: action.payload.isFetchingMode}
        }

        default: {
            return state
        }
    }

}