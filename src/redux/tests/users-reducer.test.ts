//========================================================================================

import {
    UserPageType,
    usersFollowToggle, usersIsFetchingToggle,
    usersReducer,
    usersSetCurrentPage, usersSetTotalUsersCount,
    usersSetUsers,
    UsersType
} from '../reducers/users-reducer'

let startState: UserPageType

beforeEach(() => {

    startState = {
        users: [
            {
                id: 1,
                followed: true,
                name: 'Dmitriy',
                status: 'programmer',
                photos: {
                    small: null,
                    large: null
                },
                uniqueUrlName: null
            },
            {
                id: 2,
                followed: false,
                name: 'Anna',
                status: 'doctor',
                photos: {
                    small: null,
                    large: null
                },
                uniqueUrlName: null

            },
            {
                id: 3,
                followed: true,
                name: 'Mikhail',
                status: 'programmer',
                photos: {
                    small: null,
                    large: null
                },
                uniqueUrlName: null
            }
        ],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false
    }

})


//========================================================================================

test('USERS-SET-USERS', () => {

    const users: UsersType[] = [
        {
            id: 4,
            followed: true,
            name: 'NEW',
            status: 'NEW',
            photos: {
                small: null,
                large: null
            },
            uniqueUrlName: null
        }
    ]

    const endState = usersReducer(startState, usersSetUsers(users))

    expect(endState.users.length).toBe(1)
    expect(endState.users[0].name).toBe('NEW')

})

test('USERS-FOLLOW-TOGGLE', () => {

    const endState = usersReducer(startState, usersFollowToggle(1))

    expect(endState.users[0].followed).toBe(false)
    expect(endState.users[1].followed).toBe(false)
    expect(endState.users[2].followed).toBe(true)

})

test('USERS-SET-CURRENT-PAGE', () => {

    const newPageNumber = 2

    const endState = usersReducer(startState, usersSetCurrentPage(newPageNumber))

    expect(endState.currentPage).toBe(newPageNumber)

})

test('USERS-SET-TOTAL-USERS-COUNT', () => {

    const newTotalUsersCount = 50

    const endState = usersReducer(startState, usersSetTotalUsersCount(newTotalUsersCount))

    expect(endState.totalUsersCount).toBe(newTotalUsersCount)

})

test('USERS-isFETCHING-TOGGLE', () => {

    const firstEndState = usersReducer(startState, usersIsFetchingToggle(true))

    expect(firstEndState.isFetching).toBe(true)

    const secondEndState = usersReducer(firstEndState, usersIsFetchingToggle(false))

    expect(secondEndState.isFetching).toBe(false)

})

