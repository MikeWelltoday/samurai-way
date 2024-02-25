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
                fullName: 'Dmitriy',
                status: 'programmer',
                location: {city: 'Obninsk', country: 'Russia'}
            },
            {
                id: 2,
                followed: false,
                fullName: 'Anna',
                status: 'doctor',
                location: {city: 'Obninsk', country: 'Russia'}
            },
            {
                id: 3,
                followed: true,
                fullName: 'Mikhail',
                status: 'programmer',
                location: {city: 'Obninsk', country: 'Russia'}
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
            fullName: 'NEW',
            status: 'NEW',
            location: {city: 'NEW', country: 'NEW'}
        }
    ]

    const endState = usersReducer(startState, usersSetUsersAC(users))

    expect(endState.users.length).toBe(4)
    expect(endState.users[3].fullName).toBe('NEW')

})

test('USERS-FOLLOW-TOGGLE', () => {

    const endState = usersReducer(startState, usersFollowToggleAC(1))

    expect(endState.users[0].followed).toBe(false)
    expect(endState.users[1].followed).toBe(false)
    expect(endState.users[2].followed).toBe(true)

})

