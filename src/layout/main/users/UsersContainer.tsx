import {DispatchType, StateType} from '../../../redux/redux-store'
import {
    usersFollowToggleAC,
    usersSetCurrentPageAC, usersSetTotalUsersCountAC,
    usersSetUsersAC,
    UsersType
} from '../../../redux/users-reducer/users-reducer'
import {connect} from 'react-redux'
import {Users} from './Users'


//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

function mapStateToProps(state: StateType) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

function mapDispatchToProps(dispatch: DispatchType) {
    return {
        usersSetUsers: (users: UsersType[]) => dispatch(usersSetUsersAC(users)),
        usersFollowToggle: (userId: number) => dispatch(usersFollowToggleAC(userId)),
        usersSetCurrentPage: (newPageNumber: number) => dispatch(usersSetCurrentPageAC(newPageNumber)),
        usersSetTotalUsersCount: (newTotalUsersCount: number) => dispatch(usersSetTotalUsersCountAC(newTotalUsersCount))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)