const express = require('express');
const httpProxy = require('http-proxy');
const bodyParser = require('body-parser');

const app = express();
const proxy = httpProxy.createProxyServer();
const port = 3000;

app.use(bodyParser.json());

const studentInfoServiceUrl = 'http://localhost:3001';
const paymentServiceUrl = 'http://localhost:3002';

app.get('/api/query_tuition', (req, res) => {
    console.log(`Incoming request to /api/query_tuition: ${req.method} ${req.url}`);
    proxy.web(req, res, { target: studentInfoServiceUrl }, (err) => {
        console.error(`Error forwarding request to student info service: ${err.message}`);
        res.status(500).send('Internal Server Error');
    });
});

app.post('/api/pay_tuition', (req, res) => {
    console.log(`Incoming request to /api/pay_tuition: ${req.method} ${req.url}`);
    proxy.web(req, res, { target: paymentServiceUrl }, (err) => {
        console.error(`Error forwarding request to payment service: ${err.message}`);
        res.status(500).send('Internal Server Error');
    });
});

proxy.on('proxyReq', function (proxyReq, req, res, options) {
    console.log(`Received request to ${options.target.href}: ${req.method} ${req.url}`);
});

app.listen(port, () => {
    console.log(`API Gateway listening on port ${port}`);
});
