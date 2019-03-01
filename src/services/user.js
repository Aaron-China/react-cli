import request from '../helpers/request'
import { stringify } from 'querystring';

// 游客注册，默认登录
export function visitorRegister(params) {
  return request(`/user/visitor/register?${stringify(params)}`)
}

//用户注册,即游客转用户
export function userRegister(data) {
  return request('/user/users/register', {
    method: 'put',
    body: data,
  })
}

// 用户登录
export function userLogin(data) {
  return request(`/user/login`, {
    method: 'post',
    body: data,
  })
}