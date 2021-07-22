import axios from 'axios'
                         //config为一个对象参数，为axios的具体请求参数
export function request(config) {  //该方法是对axios方法进行的封装，将来改的时候就只要改这里的就行
    const instance = axios.create({  //创建一个axios对象实例
       baseURL: 'http://123.207.32.32:8000',  //设置基础的IP和端口，那么在url里面就就可以省略这些
        timeout: 5000,
    });

    //请求拦截器
    instance.interceptors.request.use(config => {
       // config中的一些信息不符合服务器的要求，某些网络请求，必须携带一些特殊的信息
        return config; //必须返回，不然拦截了
    }, err => {
        console.log(err);
    });
    // 响应式拦截
    instance.interceptors.response.use(res => {
        return res.data;  //必须返回，不然没有结果
    }, err => {
        console.log(err);
    });

    return instance(config);  //此处返回的就是一个promise
}
//一个依赖于axios的网络请求模块
