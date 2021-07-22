import {request} from './request';

export  function getHomeMultidata() {  //首页中某个网络请求的封装
  return request({
    url: '/home/multidata',
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page, 
    }
  })
}