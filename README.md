# API GATEWAY
The two microservices are a "Student Information Service," providing student information, and a "Payment Service," handling student tuition payments.



# Usage
- Student Information Service
To retrieve student information, you can use the following endpoint:
* Endpoint: GET /query_tuition
* Parameters:
* * student_no: The student number to query
* Example Usage:
* curl http://localhost:3001/api/query_tuition?student_no=student_1
* <img width="1426" alt="image" src="https://github.com/zeynep8900/SE4458o-dev/assets/93615577/9ca22bb3-8840-40db-9733-aa1cc8891f85">

- Payment Service
To make a payment for student tuition, you can use the following endpoint:
* Endpoint: POST /api/pay_tuition
* Body: {
    "student_no": "student_1",
    "term": "Spring 2024"
}
* Example Usage:
* curl http://localhost:3002/pay_tuition
* <img width="1440" alt="image" src="https://github.com/zeynep8900/SE4458o-dev/assets/93615577/35a239d6-1873-43da-8932-53fcde26f670">

# NOTES
- Each service prints out the port it's listening on in the console output upon startup.
- Error messages are displayed in the console output in case of errors, and appropriate error messages such as "Internal Server Error" or "Student not found" are returned to clients.

