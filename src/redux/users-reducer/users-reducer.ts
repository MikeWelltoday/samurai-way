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

export type UserPageType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

//========================================================================================

export type UsersReducerActionType =
    ReturnType<typeof usersFollowToggle>
    | ReturnType<typeof usersSetUsers>
    | ReturnType<typeof usersSetCurrentPage>
    | ReturnType<typeof usersSetTotalUsersCount>
    | ReturnType<typeof usersIsFetchingToggle>

//========================================================================================

export function usersSetUsers(users: UsersType[]) {
    return {type: 'USERS-SET-USERS', payload: {users}} as const
}

export function usersFollowToggle(userId: number) {
    return {type: 'USERS-FOLLOW-TOGGLE', payload: {userId}} as const
}

export function usersSetCurrentPage(newPageNumber: number) {
    return {type: 'USERS-SET-CURRENT-PAGE', payload: {newPageNumber}} as const
}

export function usersSetTotalUsersCount(newTotalUsersCount: number) {
    return {type: 'USERS-SET-TOTAL-USERS-COUNT', payload: {newTotalUsersCount}} as const
}

export function usersIsFetchingToggle(isFetchingMode: boolean) {
    return {type: 'USERS-isFETCHING-TOGGLE', payload: {isFetchingMode}} as const
}


//========================================================================================

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