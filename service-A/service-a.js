const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const tuition_data = {
    "student_1": {"tuition_total": 5000, "balance": 2000},
    "student_2": {"tuition_total": 6000, "balance": 6000},
};

app.get('/query_tuition', (req, res) => {
    const student_no = req.query.student_no;
    if (student_no in tuition_data) {
        res.status(200).json({
            "tuition_total": tuition_data[student_no]["tuition_total"],
            "balance": tuition_data[student_no]["balance"]
        });
    } else {
        res.status(404).json({"error": "Student not found"});
    }
});

app.listen(port, () => {
    console.log(`Student Info Service listening on port ${port}`);
});
