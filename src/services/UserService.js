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
    createUserEducationService = (education) => {
        return this.post('educations', education)
    }
    createEducationUserService = (educationUser) => {
        return this.post('educationusers', educationUser)
    }
    getEducationUserDetailByUserIDService = (id) => {
        return this.get(`educationusers/byuserid/${id}`)
    }
    getEducationService = (id) => {
        return this.get(`educations/${id}`)
    }
    deleteEducationService = (id) => {
        return this.delete(`educations/${id}`)
    }
    getEducationUserByEducationIDService = (id) => {
        return this.get(`educationusers/byeducationid/${id}`)
    }
    deleteEducationUserService = (id) => {
        return this.delete(`educationusers/${id}`)
    }
    getCompanyListService = () => {
        return this.get("users/getcompanylist")
    }
    getAdminListService = () => {
        return this.get("users/getadminlist")
    }
    createRequestService = (model) => {
        return this.post("requests", model)
    }
    getRequestListByHolderID = (id) => {
        return this.get(`requests/byholderid/${id}`)
    }
    getRequestListByIssuerID = (id) => {
        return this.get(`requests/byissuerid/${id}`)
    }
    deleteRequestService = (id) => {
        return this.delete(`requests/${id}`)
    }
    rejectRequestService = (id) => {
        return this.put(`requests/rejectrequest/${id}`)
    }
}

export const userService = new UserService()