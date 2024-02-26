import {DispatchType, StateType} from '../../../redux/redux-store'
import {usersFollowToggleAC, usersSetUsersAC, UsersType} from '../../../redux/users-reducer/users-reducer'
import {connect} from 'react-redux'
import {UsersClass} from './UsersClass'


//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

function mapStateToProps(state: StateType) {
    return {
        users: state.usersPage.users
    }
}

function mapDispatchToProps(dispatch: DispatchType) {
    return {
        usersSetUsers: (users: UsersType[]) => dispatch(usersSetUsersAC(users)),
        usersFollowToggle: (userId: number) => dispatch(usersFollowToggleAC(userId))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)