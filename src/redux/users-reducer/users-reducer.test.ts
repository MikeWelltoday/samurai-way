//========================================================================================
// 🍄 .S.T.A.R.T. - .S.T.A.T.E.


import {UserPageType, usersFollowToggleAC, usersReducer, usersSetUsersAC, UsersType} from './users-reducer'

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
        ]
    }

})


//========================================================================================
// 🧪 .T.E.S.T.S.

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

    const endState = usersReducer(startState, usersSetUsersAC(users))

    expect(endState.users.length).toBe(4)
    expect(endState.users[3].name).toBe('NEW')

})

test('USERS-FOLLOW-TOGGLE', () => {

    const endState = usersReducer(startState, usersFollowToggleAC(1))

    expect(endState.users[0].followed).toBe(false)
    expect(endState.users[1].followed).toBe(false)
    expect(endState.users[2].followed).toBe(true)

})

