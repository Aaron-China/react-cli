import request from '../helpers/request'
import { stringify } from 'querystring';

// 测试1
export function login1(params) {
  return request(`/xxx/xxx1?${stringify(params)}`)
}

// 测试2
export function login2(data) {
  return request(`/xxx/xxx2`, {
    method: 'post',
    body: data,
  })
}