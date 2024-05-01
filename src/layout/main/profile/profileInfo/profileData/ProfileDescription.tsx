import React, {FC, useState} from 'react'
import S from './ProfileDescription.module.css'
import {changeProfileThunk, idSelector, profileDescriptionSelector} from '../../../../../redux'
import {useSelector} from 'react-redux'
import {ModelToUpdateType} from '../../../../../api/profile-api'
import {useAppDispatch} from '../../../../../shared'

type ProfileDescriptionPropsType = {}

export const ProfileDescription: FC<ProfileDescriptionPropsType> = (props) => {

    const dispatch = useAppDispatch()
    const profile = useSelector(profileDescriptionSelector)
    const id = useSelector(idSelector)

    const isChangeable = id === profile.userId

    const [editMode, setEditMode] = useState(false)

    const [fullName, setFullName] = useState(profile?.fullName)
    const [lookingForAJob, setLookingForAJob] = useState<boolean>(profile?.lookingForAJob)
    const [lookingForAJobDescription, setLookingForAJobDescription] = useState(profile?.lookingForAJobDescription)
    const [github, setGithub] = useState(profile?.contacts.github)
    const [vk, setVk] = useState(profile?.contacts.vk)
    const [facebook, setFacebook] = useState(profile?.contacts.facebook)
    const [instagram, setInstagram] = useState(profile?.contacts.instagram)
    const [twitter, setTwitter] = useState(profile?.contacts.twitter)
    const [website, setWebsite] = useState(profile?.contacts.website)
    const [youtube, setYoutube] = useState(profile?.contacts.youtube)
    const [mainLink, setMainLink] = useState(profile?.contacts.mainLink)

    function onClickHandler() {
        if (!editMode) {
            setEditMode(true)
        }


        if (editMode) {
            // ВКЛЮЧАЕМ РЕЖИМ - SPAN
            setEditMode(false)

            // собираем форму к отправке

            const modelToUpdate: ModelToUpdateType = {
                userId: id,
                fullName,
                lookingForAJob,
                lookingForAJobDescription,
                contacts: {
                    github,
                    vk,
                    facebook,
                    instagram,
                    twitter,
                    website,
                    youtube,
                    mainLink
                }
            }

            dispatch(changeProfileThunk(modelToUpdate))
        }
    }

    return (
        <div
            className={S.profileDescription}>

            <button className={!isChangeable ? `${S.editButton} ${S.buttonShow}` : `${S.editButton}`}
                    onClick={onClickHandler} disabled={!isChangeable}>
                {editMode ? 'save' : 'edit'}
            </button>

            <ul>

                <li>
                    <p>Full name: </p>
                    {editMode ?
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)}/> :
                        <span> {profile?.fullName}</span>
                    }
                </li>

                <li>
                    <p>Looking for a job: </p>
                    {editMode ?
                        <input type="checkbox" checked={lookingForAJob}
                               onChange={(e) => setLookingForAJob(e.target.checked)}/> :
                        <span> {profile?.lookingForAJob ? 'yes' : 'no'}</span>
                    }
                </li>

                <li>
                    <p>Job Description: </p>
                    {editMode ?
                        <input type="text" value={lookingForAJobDescription ? lookingForAJobDescription : ''}
                               onChange={(e) => setLookingForAJobDescription(e.target.value)}/> :
                        <span> {profile?.lookingForAJobDescription ? profile?.lookingForAJobDescription : 'none'}</span>
                    }
                </li>

                <li>
                    <p>github: </p>
                    {editMode ?
                        <input type="text" value={github ? github : ''}
                               onChange={(e) => setGithub(e.target.value)}/> :
                        <span> {profile?.contacts.github ? profile?.contacts.github : 'none'}</span>
                    }
                </li>

                <li>
                    <p>vk: </p>
                    {editMode ?
                        <input type="text" value={vk ? vk : ''}
                               onChange={(e) => setVk(e.target.value)}/> :
                        <span> {profile?.contacts.vk ? profile?.contacts.vk : 'none'}</span>
                    }
                </li>

                <li>
                    <p>facebook: </p>
                    {editMode ?
                        <input type="text" value={facebook ? facebook : ''}
                               onChange={(e) => setFacebook(e.target.value)}/> :
                        <span> {profile?.contacts.facebook ? profile?.contacts.facebook : 'none'}</span>
                    }
                </li>


                <li>
                    <p>instagram: </p>
                    {editMode ?
                        <input type="text" value={instagram ? instagram : ''}
                               onChange={(e) => setInstagram(e.target.value)}/> :
                        <span> {profile?.contacts.instagram ? profile?.contacts.instagram : 'none'}</span>
                    }
                </li>

                <li>
                    <p>twitter: </p>
                    {editMode ?
                        <input type="text" value={twitter ? twitter : ''}
                               onChange={(e) => setTwitter(e.target.value)}/> :
                        <span> {profile?.contacts.twitter ? profile?.contacts.twitter : 'none'}</span>
                    }
                </li>

                <li>
                    <p>website: </p>
                    {editMode ?
                        <input type="text" value={website ? website : ''}
                               onChange={(e) => setWebsite(e.target.value)}/> :
                        <span> {profile?.contacts.website ? profile?.contacts.website : 'none'}</span>
                    }
                </li>

                <li>
                    <p>youtube: </p>
                    {editMode ?
                        <input type="text" value={youtube ? youtube : ''}
                               onChange={(e) => setYoutube(e.target.value)}/> :
                        <span> {profile?.contacts.youtube ? profile?.contacts.youtube : 'none'}</span>
                    }
                </li>

                <li>
                    <p>mainLink: </p>
                    {editMode ?
                        <input type="text" value={mainLink ? mainLink : ''}
                               onChange={(e) => setMainLink(e.target.value)}/>
                        :
                        <span> {profile?.contacts.mainLink ? profile?.contacts.mainLink : 'none'}</span>
                    }
                </li>


            </ul>


        </div>
    )
}