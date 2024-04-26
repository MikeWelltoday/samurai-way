import React, {FC} from 'react'
import S from './ProfileInfo.module.css'
import {Loader} from '../../../../shared/ui/loader/Loader'
import {profileApi, UserProfileApiType} from '../../../../api/profile-api'
import {ProfileStatus} from './profileStatus/ProfileStatus'

//========================================================================================
import image from '../../../../assets/images/content-iamge.webp'
import {ProfileDescription} from './profileData/ProfileDescription'

//========================================================================================

type ProfileInfoType = {
    userProfile: UserProfileApiType | null
    profileStatus: string
    isStatusChangeable: boolean
    updateStatus: (newStatus: string) => void
}

export const ProfileInfo: FC<ProfileInfoType> = (props) => {

    if (!props.userProfile) {
        return (
            <div className={S.preloaderContainer}>
                <Loader/>
            </div>

        )
    }


    // обработываем загрузку изображения
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]

            // убедились что изображение существует
            // будем отправлять на сервер, но сначала поместим его в FormData

            // на сервер файл полетит в специальном формате fromData
            // логика будет описана в API

            // теперь отправляем на сервер
            profileApi.updatePhoto(file)
        }
    }

    return (
        <div className={S.profileInfo}>

            <div className={S.imageBox}>
                {
                    props.userProfile?.photos.large ? <img src={props.userProfile.photos.large} alt="sry"/> :
                        <img src={image} alt={'sry'}/>
                }
            </div>

            {props.isStatusChangeable &&
                <div className={S.imageUpload}>
                    <label htmlFor="image-upload" className={S.uploadButton}>
                        load new image
                    </label>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}

                        style={{display: 'none'}}   // для скрытия стандартного загрузчика
                    />
                </div>
            }


            <div className={S.profileStatusContainer}>
                <ProfileStatus
                    status={props.profileStatus}
                    updateStatus={props.updateStatus}
                    isStatusChangeable={props.isStatusChangeable}
                />
            </div>

            <ProfileDescription/>

        </div>
    )
}