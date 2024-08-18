import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 500, // Số lượng Virtual Users (VUs)
    duration: '3m', // Thời gian chạy load test
};

export default function () {
    let res = http.get('http://localhost/api/prime');
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
    sleep(1);
}
