import {StateType} from '../../../redux/redux-store'
import {
    usersFollowToggle,
    usersIsFetchingToggle,
    usersSetCurrentPage,
    usersSetTotalUsersCount,
    usersSetUsers,
    UsersType
} from '../../../redux/users-reducer/users-reducer'
import {connect} from 'react-redux'
import React from 'react'
import axios from 'axios'
import {Users} from './Users'
import {PreloaderWrapper} from './preloaderWrapper/PreloaderWrapper'

//========================================================================================

type UsersAPIComponentClassType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

    usersSetUsers: (users: UsersType[]) => void
    usersFollowToggle: (userId: number) => void
    usersSetCurrentPage: (newPageNumber: number) => void
    usersSetTotalUsersCount: (newTotalUsersCount: number) => void
    usersIsFetchingToggle: (isFetchingMode: boolean) => void
}

//========================================================================================

type UsersApiType = {
    items: Item[];
    totalCount: number;
    error?: any;
}

type Item = {
    name: string;
    id: number;
    photos: Photos;
    status: string | null
    followed: boolean;
}

type Photos = {
    small: string | null
    large: string | null
}

//========================================================================================

export class UsersApiContainer extends React.Component<UsersAPIComponentClassType> {

    // метод, который будет вызываться при монтировании компоненты
    componentDidMount() {

        this.props.usersIsFetchingToggle(true)

        // получаем данные пользователей с сервера
        axios.get<UsersApiType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.usersSetUsers(response.data.items)
                this.props.usersSetTotalUsersCount(response.data.totalCount)
                this.props.usersIsFetchingToggle(false)
            })
    }

    changePageHandler = (newPageNumber: number) => {

        this.props.usersIsFetchingToggle(true)

        setTimeout(() => {
            axios.get<UsersApiType>(`https://social-network.samuraijs.com/api/1.0/users?page=${newPageNumber}&count=${this.props.pageSize}`)
                .then(response => this.props.usersSetUsers(response.data.items))

            this.props.usersIsFetchingToggle(false)
        }, 500)
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
                        changePageHandler={this.changePageHandler}
                        usersFollowToggle={this.props.usersFollowToggle}
                        usersSetCurrentPage={this.props.usersSetCurrentPage}
                    />
                }
            </>


        )
    }
}

//========================================================================================

function mapStateToProps(state: StateType) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        usersSetUsers,
        usersFollowToggle,
        usersSetCurrentPage,
        usersSetTotalUsersCount,
        usersIsFetchingToggle
    }
)(UsersApiContainer)



