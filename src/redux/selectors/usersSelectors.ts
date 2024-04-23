import {AppRootStateType} from '../store'
import {UsersType} from '../reducers/users-reducer'
import {createSelector} from 'reselect'


const users = (state: AppRootStateType): UsersType[] => state.usersPage.users

// если нужно проводить сложные вычисления в селекторе, то используется
// бибилиотека RESELECT, которая предотвращает лишние перерисовки компонент
// которые используют этот селектор

const usersWithReselect = createSelector(users, (users: UsersType[]): UsersType[] => {
    // так как просто рассматриваем пример, и нам не нужна никакая дополнительная логика
    // просто поставим заглущку
    return users.filter(user => user)

    // !!! usersWithReselect все ровно будет принимать на вход именно state
})


const pageSize = (state: AppRootStateType): number => state.usersPage.pageSize
const totalUsersCount = (state: AppRootStateType): number => state.usersPage.totalUsersCount
const currentPage = (state: AppRootStateType): number => state.usersPage.currentPage
const isFetching = (state: AppRootStateType): boolean => state.usersPage.isFetching

export const usersSelectors = {
    usersWithReselect,
    pageSize,
    totalUsersCount,
    currentPage,
    isFetching
}