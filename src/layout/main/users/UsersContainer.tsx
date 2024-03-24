import {AppRootStateType, fetchUsersTC, usersSetCurrentPageAC, UsersType} from '../../../redux'
import {connect} from 'react-redux'
import React from 'react'
import {Users} from './users/Users'
import {PreloaderWrapper} from './preloaderWrapper/PreloaderWrapper'

//========================================================================================

type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type mapDispatchToProps = {
    usersSetCurrentPageAC: (newPageNumber: number) => void
    fetchUsersTC: (currentPage: number, pageSize: number) => void
}

type UsersAPIComponentClassType = MapStateToPropsType & mapDispatchToProps

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

function mapStateToProps(state: AppRootStateType): MapStateToPropsType {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps: mapDispatchToProps = {
    usersSetCurrentPageAC,
    fetchUsersTC
}

// connect сам там составляет cb-function на основе Action Creator
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer)
