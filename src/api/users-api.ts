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

//========================================================================================

export const usersApi = {

    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersApiType>(`users?page=${currentPage}&count=${pageSize}`)
    }


}





















