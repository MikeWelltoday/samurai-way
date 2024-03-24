import {AppRootStateType, fetchUsersTC, usersSetCurrentPageAC, UsersType} from '../../../redux'
import {connect} from 'react-redux'
import React from 'react'
import {Users} from './users/Users'
import {PreloaderWrapper} from './preloaderWrapper/PreloaderWrapper'

//========================================================================================

type UsersAPIComponentClassType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

    usersSetCurrentPageAC: (newPageNumber: number) => void
    fetchUsersTC: (currentPage: number, pageSize: number) => void
}

//========================================================================================

export class UsersApiContainer extends React.Component<UsersAPIComponentClassType> {

    componentDidMount() {
        this.props.fetchUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onChangePageHandler = (newPageNumber: number) => {
        this.props.fetchUsersTC(newPageNumber, this.props.pageSize)
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

                        usersSetCurrentPage={this.props.usersSetCurrentPageAC}
                        changePageHandler={this.onChangePageHandler}
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
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = {
    usersSetCurrentPageAC,
    fetchUsersTC
}

// connect сам там составляет cb-function на основе Action Creator
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer)
