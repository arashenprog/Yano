import Axios from 'axios';
let URL = "http://144.76.233.82:8088/api/v1/";

export class Service {
    get(url, params) {
        return new Promise((resolve, reject) => {
            Axios.get(URL + url, params).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
    post() {

    }

    setLocalStorage(key,value){
        
    }
}

export default Service
