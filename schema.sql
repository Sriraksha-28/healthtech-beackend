-- CREATE TABLE prescriptions (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     doctor_id INTEGER,
--     patient_id INTEGER,
--     medicine TEXT,
--     dosage TEXT,
--     notes TEXT,
--     FOREIGN KEY (doctor_id) REFERENCES users(id),
--     FOREIGN KEY (patient_id) REFERENCES users(id)
-- );

SELECT * FROM users;
SELECT * FROM prescriptions;