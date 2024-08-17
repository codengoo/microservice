import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 200, // Số lượng Virtual Users (VUs)
    duration: '10m', // Thời gian chạy load test
};

export default function () {
    let res = http.get('http://localhost:3001/');
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
    sleep(1);
}
