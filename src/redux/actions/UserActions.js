import { userService } from "../../services/UserService"
import { DID } from "../../utils/settings/config"
import { ADD_USER_EDUCATION, DELETE_EDUCATION, GET_ADMIN_LIST, GET_COMPANY_LIST, GET_REQUEST_RECEIVED, GET_REQUEST_SENT, SET_USER_INFO } from "../consts/UserConsts"

export const setUserInfoAction = (userInfo) => ({
    type: SET_USER_INFO,
    userInfo
})

export const updateUserInfoAction = (values) => {
    return async (dispatch, getState) => {
        try {
            const { userInfo, user } = getState().UserReducer
            if (typeof userInfo.name === "undefined") {
                const { data } = await userService.createUserInfoService(values)
                await userService.createUserUserInfoService({
                    userID: user.id,
                    userInfoID: data.userInfo.id
                })
                dispatch(setUserInfoAction(data.userInfo))
            }
            else {
                const { data } = await userService.updateUserInfoService(userInfo.id, values)
                dispatch(setUserInfoAction(data.userInfo))
            }
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const getUserInfoAction = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await userService.getUserUserInfoByUserIDService(id);
            const { userInfoID } = response.data.userUserInfo
            const { data } = await userService.getUserInfoService(userInfoID)
            dispatch(setUserInfoAction(data.userInfo))
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const addEducationAction = (education) => ({
    type: ADD_USER_EDUCATION,
    education
})

export const addUserEducationAction = (values) => {
    return async (dispatch, getState) => {
        try {
            const { user } = getState().UserReducer
            const { data } = await userService.createUserEducationService(values)
            await userService.createEducationUserService({
                userID: user.id,
                educationID: data.education.id
            })
            dispatch(addEducationAction(data.education))

        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const getEducationAction = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await userService.getEducationUserDetailByUserIDService(id);
            response.data.educationUserList.forEach(async (educationUser) => {
                const { data } = await userService.getEducationService(educationUser.educationID)
                dispatch(addEducationAction(data.education))
            })
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const deleteEducationAction = (educationID) => {
    return async (dispatch, getState) => {
        try {
            await userService.deleteEducationService(educationID);
            const { data } = await userService.getEducationUserByEducationIDService(educationID);
            await userService.deleteEducationUserService(data.educationUser.id)
            dispatch({
                type: DELETE_EDUCATION,
                educationID
            })
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const getCompanyListAction = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await userService.getCompanyListService()
            dispatch({
                type: GET_COMPANY_LIST,
                companyList: data.companyList
            })
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const getAdminListAction = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await userService.getAdminListService()
            dispatch({
                type: GET_ADMIN_LIST,
                adminList: data.adminList
            })
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const createRequestAction = (requestType, values, identity) => {
    return async (dispatch, getState) => {
        const { user } = await getState().UserReducer
        const model = {
            requestType,
            holderID: user.id,
            issuerID: values.issuer,
            data: JSON.stringify(values),
            holderDID: localStorage.getItem(DID),
            identity
        }
        try {
            if (requestType === "infomation") {
                const { data } = await userService.getRequestListByHolderID(user.id)
                data.requestList.forEach(async (request) => {
                    if (request.requestType === "infomation" && request.isdone === "false") {
                        await userService.deleteRequestService(request.id)
                    }
                })
            }
            await userService.createRequestService(model)
            await dispatch(getRequestSentAction(user.id))

            if (requestType === "infomation") {
                await dispatch(updateUserInfoAction({ ...values, claimID: "" }))
            }
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const getRequestReceivedAction = (id) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await userService.getRequestListByIssuerID(id)
            dispatch({
                type: GET_REQUEST_RECEIVED,
                requestReceivedList: data.requestList
            })
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const getRequestSentAction = (id) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await userService.getRequestListByHolderID(id)
            dispatch({
                type: GET_REQUEST_SENT,
                requestSentList: data.requestList
            })
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const rejectRequestAction = (request) => {
    return async (dispatch, getState) => {
        try {
            await userService.rejectRequestService(request.id)
            dispatch(getRequestReceivedAction(request.issuerID))
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}