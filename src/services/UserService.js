import { baseService } from "./BaseService";

export class UserService extends baseService {
    createUserInfoService = (userInfo) => {
        return this.post(`userinfos`, userInfo)
    }
    createUserUserInfoService = (userUserInfo) => {
        return this.post(`useruserinfos`, userUserInfo)
    }
    getUserInfoService = (id) => {
        return this.get(`userinfos/${id}`)
    }
    getUserUserInfoByUserIDService = (id) => {
        return this.get(`useruserinfos/byuserid/${id}`)
    }
    updateUserInfoService = (id, userInfo) => {
        return this.put(`userinfos/${id}`, userInfo)
    }
}

export const userService = new UserService()