/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminListAction, getCompanyListAction, getEducationAction, getRequestSentAction, getUserInfoAction } from '../../../redux/actions/UserActions'
import UserEducation from './UserProfileComponent/UserEducation'
import UserExperience from './UserProfileComponent/UserExperience'
import UserInfo from './UserProfileComponent/UserInfo'
import UserSkill from './UserProfileComponent/UserSkill'

export default function UserProfile() {

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.UserReducer);

    useEffect(() => {
        dispatch(getUserInfoAction(user.id)) 
        dispatch(getEducationAction(user.id)) 
        dispatch(getCompanyListAction())
        dispatch(getAdminListAction());
        dispatch(getRequestSentAction(user.id))
    }, [])

    return (
        <div>
            <h1 className="mt-10 sm:text-3xl font-medium title-font text-center text-blue-900">Your Profile</h1>
            <UserInfo/>
            <UserEducation/>
            <UserSkill/>
            <UserExperience/>
        </div>
    )
}
