const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors())

 const config = {
    user: 'uanw1msjjqu5sil3',
    password: 'CGt0a6BlkvDTO9jsRuuE',
    host: 'b3dozmhim6eexpxm0sn2-mysql.services.clever-cloud.com',
    port: 3306,
    database: 'b3dozmhim6eexpxm0sn2',
/*     ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync('ca.pem'),
    } */
}; 

const db = mysql.createPool(config)

app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('OJT-APP')
})

db.getConnection((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the database');
    }
});

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
});

//update student id number
app.post('/updateStudentIdNo', (req, res) => {
    const { value, keyNO } = req.body;

    if (!value || !keyNO) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    db.query(
        'UPDATE studentDetails SET studentIdNO = ? WHERE keyNO = ?', 
        [value, keyNO], 
        function (err, result) {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: "Database error" });
            }
            return res.json({ message: "Student details updated successfully" });
        }
    );
});

//update student name
app.post('/updateStudentName', (req, res) => {
    const { value, studentIdNO } = req.body;

    if (!value || !studentIdNO) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    db.query(
        'UPDATE studentDetails SET studentName = ? WHERE studentIdNO = ?', 
        [value, studentIdNO], 
        function (err, result) {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: "Database error" });
            }
            return res.json({ message: "Student details updated successfully" });
        }
    );
});
// Update student ID number
app.post('/updateStudentIdNo', (req, res) => {
    const { value, keyNO } = req.body;

    if (!value || !keyNO) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    db.query(
        'UPDATE studentDetails SET studentIdNO = ? WHERE keyNO = ?', 
        [value, keyNO], 
        function (err, result) {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: "Database error" });
            }
            return res.json({ message: "Student details updated successfully" });
        }
    );
});

// Update student name
app.post('/updateStudentName', (req, res) => {
    const { value, studentIdNO } = req.body;

    if (!value || !studentIdNO) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    db.query(
        'UPDATE studentDetails SET studentName = ? WHERE studentIdNO = ?', 
        [value, studentIdNO], 
        function (err, result) {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: "Database error" });
            }
            return res.json({ message: "Student details updated successfully" });
        }
    );
});

// Update student program
app.post('/updateStudentProgram', (req, res) => {
    const { value, studentIdNO } = req.body;

    if (!value || !studentIdNO) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    db.query(
        'UPDATE studentDetails SET studentProgram = ? WHERE studentIdNO = ?', 
        [value, studentIdNO], 
        function (err, result) {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: "Database error" });
            }
            return res.json({ message: "Student program updated successfully" });
        }
    );
});

// Update student section
app.post('/updateStudentSection', (req, res) => {
    const { value, studentIdNO } = req.body;

    if (!value || !studentIdNO) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    db.query(
        'UPDATE studentDetails SET studentSection = ? WHERE studentIdNO = ?', 
        [value, studentIdNO], 
        function (err, result) {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: "Database error" });
            }
            return res.json({ message: "Student section updated successfully" });
        }
    );
});

// Update student email
app.post('/updateStudentEmail', (req, res) => {
    const { value, studentIdNO } = req.body;

    if (!value || !studentIdNO) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    db.query(
        'UPDATE studentDetails SET studentEmail = ? WHERE studentIdNO = ?', 
        [value, studentIdNO], 
        function (err, result) {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: "Database error" });
            }
            return res.json({ message: "Student email updated successfully" });
        }
    );
});

// Update student adviser
app.post('/updateStudentAdviser', (req, res) => {
    const { value, studentIdNO } = req.body;

    if (!value || !studentIdNO) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    db.query(
        'UPDATE studentDetails SET studentAdviser = ? WHERE studentIdNO = ?', 
        [value, studentIdNO], 
        function (err, result) {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: "Database error" });
            }
            return res.json({ message: "Student adviser updated successfully" });
        }
    );
});

// Update OJT status
app.post('/updateOjtStatus', (req, res) => {
    const { value, studentIdNO } = req.body;

    if (!value || !studentIdNO) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    db.query(
        'UPDATE studentDetails SET ojtStatus = ? WHERE studentIdNO = ?', 
        [value, studentIdNO], 
        function (err, result) {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: "Database error" });
            }
            return res.json({ message: "OJT status updated successfully" });
        }
    );
});

// Update academic year
app.post('/updateAcademicYear', (req, res) => {
    const { value, studentIdNO } = req.body;

    if (!value || !studentIdNO) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    db.query(
        'UPDATE studentDetails SET academicYear = ? WHERE studentIdNO = ?', 
        [value, studentIdNO], 
        function (err, result) {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: "Database error" });
            }
            return res.json({ message: "Academic year updated successfully" });
        }
    );
});

// Update semester
app.post('/updateSemester', (req, res) => {
    const { value, studentIdNO } = req.body;

    if (!value || !studentIdNO) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    db.query(
        'UPDATE studentDetails SET semester = ? WHERE studentIdNO = ?', 
        [value, studentIdNO], 
        function (err, result) {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: "Database error" });
            }
            return res.json({ message: "Semester updated successfully" });
        }
    );
});

//get student name
app.get('/getStudentName', (req, res) => {
    const { studentIdNO } = req.body;
    const sql = "select studentName from studentDetails where studentIdNO = ?"
    db.query(sql, [studentIdNO], function (err, data) {
        if (err) return res.json(err);
        return res.json(data)
      });
})

//get student details table
app.get('/studentDetails', (req, res) => {
    const sql = "select * from  studentDetails"
    db.query(sql, function (err, data) {
        if (err) return res.json(err);
        return res.json(data)
      });
})

app.listen(8080, () => {
    console.log(`OJT app listening on port`)
  })