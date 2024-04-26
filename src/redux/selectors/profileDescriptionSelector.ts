import {AppRootStateType} from '../store'
import {UserProfileApiType} from '../../api/profile-api'


export const profileDescriptionSelector = (state: AppRootStateType): UserProfileApiType => state.profilePage.userProfile as UserProfileApiType