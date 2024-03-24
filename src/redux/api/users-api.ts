import {instance} from './instance'

//========================================================================================

type Photos = {
    small: string | null
    large: string | null
}

type Item = {
    name: string;
    id: number;
    photos: Photos;
    status: string | null
    followed: boolean;
}

type UsersApiType = {
    items: Item[];
    totalCount: number;
    error?: any;
}

type PostDeleteResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

//========================================================================================

export const usersApi = {

    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersApiType>(`users?page=${currentPage}&count=${pageSize}`)
    },

    followUser(userId: number) {
        return instance.post<PostDeleteResponseType>(`/follow/${userId}`)
    },

    unfollowUser(userId: number) {
        return instance.delete<PostDeleteResponseType>(`/follow/${userId}`)
    }


}





















