import {
  request
} from './request';

export function find(decription) {
  return request({
    url: 'api/1',
    method: 'get',
    params: {
      decription
    }
  })
}


export function findall(page,pagenumber) {
    return request({
      url: 'api/5',
      method: 'get',
      params: {
        page,pagenumber
      }
    })
  }
  

  export function findallclass() {
    return request({
      url: 'api/7',
      method: 'get',
    })
  }

  export function findall2() {
    return request({
      url: 'api/6',
      method: 'get',
    })
  }

  export function remove(id) {
    return request({
      url: 'api/2',
      method: 'get',
      params: {
        id
      }
    })
  }

  export function add(id) {
    return request({
      url: 'api/3',
      method: 'post',
      params: {
        id
      }
    })
  }

