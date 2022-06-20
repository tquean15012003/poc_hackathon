import { SET_USER, SET_USER_INFO } from "../consts/UserConsts";

const stateDefault = {
    user: {
    },
    userInfo: {
    },
    userSkill: [],
    userEducation: [],
    userExperience: [],
    did: "",
    accessToken: ""
};

export const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_USER: {
            state.user = action.user
            state.did = action.did
            state.accessToken = action.accessToken
            return { ...state }
        }
        case SET_USER_INFO: {
            state.userInfo = action.userInfo
            return { ...state }
        }
        default: return { ...state };
    };
};