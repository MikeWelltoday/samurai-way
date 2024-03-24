//========================================================================================

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
    uniqueUrlName?: string | null
}

export type UserStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

//========================================================================================

export type UsersReducerActionType =
    ReturnType<typeof usersFollowToggleAC>
    | ReturnType<typeof usersSetUsersAC>
    | ReturnType<typeof usersSetCurrentPageAC>
    | ReturnType<typeof usersSetTotalUsersCountAC>
    | ReturnType<typeof usersIsFetchingToggleAC>

//========================================================================================

const initialState: UserStateType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export function usersReducer(state: UserStateType = initialState, action: UsersReducerActionType): UserStateType {

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

//========================================================================================

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