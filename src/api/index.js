//API进行统一管理
//引入二次封装的axios(带有响应请求拦截器)
import requests from './request';


//公司列表接口
export const reqGetCompanyList = (data) => {
    //发请求
    return requests({
        url: '/company/',
        method: 'post',
        data
    })
}

//产品列表接口
export const reqGetProductList = (data) => {
    //发请求
    return requests({
        url: '/product/',
        method: 'post',
        data
    })
}

//产品详情接口
export const reqGetProductInfo = (id) => {
    //发请求
    return requests({
        url: `/product/${id}`,
        method: 'get'
    })
}

//产品介绍接口
export const reqGetProductIntroduction = (id) => {
    //发请求
    return requests({
        url: `/introduction/${id}`,
        method: 'get'
    })
}

//产品/公司论文列表接口
export const reqGetCompanyOrProductPaper = (data) => {
    //发请求
    return requests({
        url: '/paper/',
        method: 'post',
        data
    })
}

//产品/公司专利列表接口
export const reqGetCompanyOrProductPatent = (data) => {
    //发请求
    return requests({
        url: '/patent/',
        method: 'post',
        data
    })
}

//产品排行接口
export const reqGetProductRanking = (id) => {
    //发请求
    return requests({
        url: `/ranking/${id}`,
        method: 'get'
    })
}

//公司项目列表接口
export const reqGetCompanySupport = (data) => {
    //发请求
    return requests({
        url: '/support/',
        method: 'post',
        data
    })
}

//公司获奖列表接口
export const reqGetCompanyAward = (data) => {
    //发请求
    return requests({
        url: '/award/',
        method: 'post',
        data
    })
}

//公司指南列表接口
export const reqGetCompanyGc = (data) => {
    //发请求
    return requests({
        url: '/gc/',
        method: 'post',
        data
    })
}

//排行榜接口
export const reqGetRanking = (data) => {
    //发请求
    return requests({
        url: '/ranking/',
        method: 'post',
        data
    })
}