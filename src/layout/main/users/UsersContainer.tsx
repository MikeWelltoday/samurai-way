import {
    AppRootStateType, usersApi,
    usersFollowToggleAC,
    usersIsFetchingToggleAC,
    usersSetCurrentPageAC,
    usersSetTotalUsersCountAC,
    usersSetUsersAC,
    UsersType
} from '../../../redux'
import {connect} from 'react-redux'
import React from 'react'
import {Users} from './Users'
import {PreloaderWrapper} from './preloaderWrapper/PreloaderWrapper'
import {usersToggleIsFollowingProgressAC} from '../../../redux/reducers/users-reducer'

//========================================================================================

type UsersAPIComponentClassType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean

    usersSetUsers: (users: UsersType[]) => void
    usersFollowToggle: (userId: number) => void
    usersSetCurrentPage: (newPageNumber: number) => void
    usersSetTotalUsersCount: (newTotalUsersCount: number) => void
    usersIsFetchingToggle: (isFetchingMode: boolean) => void
    usersToggleIsFollowingProgress: (isFetching: boolean) => void
}

//========================================================================================

export class UsersApiContainer extends React.Component<UsersAPIComponentClassType> {

    componentDidMount() {
        this.props.usersIsFetchingToggle(true)
        usersApi
            .getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.usersSetUsers(res.data.items)
                this.props.usersSetTotalUsersCount(res.data.totalCount)
            })
        this.props.usersIsFetchingToggle(false)
    }

    changePageHandler = (newPageNumber: number) => {
        this.props.usersIsFetchingToggle(true)
        usersApi
            .getUsers(newPageNumber, this.props.pageSize)
            .then(res => {
                this.props.usersSetUsers(res.data.items)
            })
        this.props.usersIsFetchingToggle(false)
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <PreloaderWrapper/>
                    :
                    <Users
                        users={this.props.users}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        followingInProgress={this.props.followingInProgress}

                        changePageHandler={this.changePageHandler}
                        usersFollowToggle={this.props.usersFollowToggle}
                        usersSetCurrentPage={this.props.usersSetCurrentPage}
                        usersToggleIsFollowingProgress={this.props.usersToggleIsFollowingProgress}
                    />
                }
            </>


        )
    }
}

//========================================================================================

function mapStateToProps(state: AppRootStateType) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// function mapDispatchToProps(dispatch: DispatchType) {
//     return {
//         usersSetUsers: (users: UsersType[]) => dispatch(usersSetUsersAC(users)),
//         usersFollowToggle: (userId: number) => dispatch(usersFollowToggleAC(userId)),
//         usersSetCurrentPage: (newPageNumber: number) => dispatch(usersSetCurrentPageAC(newPageNumber)),
//         usersSetTotalUsersCount: (newTotalUsersCount: number) => dispatch(usersSetTotalUsersCountAC(newTotalUsersCount)),
//         usersIsFetchingToggle: (isFetchingMode: boolean) => dispatch(usersIsFetchingToggleAC(isFetchingMode))
//     }
// }

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer)

// connect сам там составляет cb-function на основе Action Creator
export const UsersContainer = connect(mapStateToProps, {
        usersSetUsers: usersSetUsersAC,
        usersFollowToggle: usersFollowToggleAC,
        usersSetCurrentPage: usersSetCurrentPageAC,
        usersSetTotalUsersCount: usersSetTotalUsersCountAC,
        usersIsFetchingToggle: usersIsFetchingToggleAC,
        usersToggleIsFollowingProgress: usersToggleIsFollowingProgressAC
    }
)(UsersApiContainer)



