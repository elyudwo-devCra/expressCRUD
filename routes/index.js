const express = require('express');
const router = express.Router();

// HTTP GET 요청
router.get('/', function (req, res) {
    res.send('Hello World!');
});

// HTTP POST 요청
router.post('/', function (req, res) {
    const receivedNumber = req.body.number;
    if (typeof receivedNumber === 'number') {
        const result = receivedNumber + 3;
        res.json({ result: result });
    } else {
        res.status(400).json({ error: 'Invalid input, please send a number.' });
    }
});

// 기타 예제 요청
router.get('/example/a', function (req, res) {
    res.send('Hello from A!');
});

router.get('/example/b', function (req, res, next) {
    console.log('첫 번째 콜백 함수');
    next();
}, function (req, res) {
    res.send('두 번째 콜백 함수');
});

// 모든 HTTP 요청
router.all('/customer', function (req, res) {
    res.send('Got a ALL request at /customer');
});

module.exports = router;
