import { logInService } from "../../services/LogInServices"
import { SET_USER } from "../consts/UserConsts"

export const logInInAction = (logInInfo) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await logInService.logInService(logInInfo)
            dispatch({
                type: SET_USER,
                user: data.user,
                did: data.did,
                accessToken: data.accessToken
            })
            const { navigate } = getState().NavigateReducer;
            navigate(`${data.user.type}home`, {replace: false})
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const signUpAction = (signUpInfo) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await logInService.signUpService(signUpInfo)
            alert(data.message)
            const { navigate } = getState().NavigateReducer;
            navigate("/", {replace: false})
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}