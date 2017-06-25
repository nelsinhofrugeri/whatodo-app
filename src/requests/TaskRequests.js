import axios from 'axios';

export default class TaskRequests {
    list() {
        return axios.get('http://192.168.0.102:9000/task');
    }
}
