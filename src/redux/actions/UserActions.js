import { userService } from "../../services/UserService"
import { SET_USER_INFO } from "../consts/UserConsts"

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