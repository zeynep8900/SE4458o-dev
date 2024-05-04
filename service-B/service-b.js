const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

app.use(bodyParser.json());

app.post('/pay_tuition', (req, res) => {
    const { student_no, term } = req.body;
    // Ödeme işlemi burada gerçekleştirilebilir
    res.status(200).json({"payment_status": "Successful"});
});

app.listen(port, () => {
    console.log(`Payment Service listening on port ${port}`);
});
