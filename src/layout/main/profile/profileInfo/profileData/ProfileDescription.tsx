import React, {FC, useEffect, useState} from 'react'
import S from './ProfileDescription.module.css'
import {profileDescriptionSelector} from '../../../../../redux'
import {useSelector} from 'react-redux'

type ProfileDescriptionPropsType = {}

export const ProfileDescription: FC<ProfileDescriptionPropsType> = (props) => {

    const profile = useSelector(profileDescriptionSelector)
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
        setEditMode(!editMode)
    }

    return (
        <div className={S.profileDescription}>

            <button className={S.editButton} onClick={onClickHandler}>
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
                    <p>github: </p><span> {profile?.contacts.github ? profile?.contacts.github : 'none'}</span>
                </li>

                <li>
                    <p>vk: </p><span> {profile?.contacts.vk ? profile?.contacts.vk : 'none'}</span>
                </li>

                <li>
                    <p>facebook: </p><span> {profile?.contacts.facebook ? profile?.contacts.facebook : 'none'}</span>
                </li>


                <li>
                    <p>instagram: </p><span> {profile?.contacts.instagram ? profile?.contacts.instagram : 'none'}</span>
                </li>

                <li>
                    <p>twitter: </p><span> {profile?.contacts.twitter ? profile?.contacts.twitter : 'none'}</span>
                </li>

                <li>
                    <p>website: </p><span> {profile?.contacts.website ? profile?.contacts.website : 'none'}</span>
                </li>

                <li>
                    <p>youtube: </p><span> {profile?.contacts.youtube ? profile?.contacts.youtube : 'none'}</span>
                </li>

                <li>
                    <p>mainLink: </p><span> {profile?.contacts.mainLink ? profile?.contacts.mainLink : 'none'}</span>
                </li>


            </ul>


        </div>
    )
}