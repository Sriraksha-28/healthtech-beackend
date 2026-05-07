const {
  createPrescription,
  getDoctorPrescriptions,
  getPatientPrescriptions,
  updatePrescription,
} = require("../models/prescriptionModel");

exports.create = (req, res) => {

  const doctor_id = req.user.id;

  const {
    patient_id,
    medicine,
    dosage,
    notes,
  } = req.body;

  createPrescription(
    doctor_id,
    patient_id,
    medicine,
    dosage,
    notes,
    function (err) {

      if (err) {
        return res.status(500).json(err.message);
      }

      res.json({
        message: "Prescription Created",
      });

    }
  );
};

exports.getDoctor = (req, res) => {

  getDoctorPrescriptions(
    req.user.id,
    (err, rows) => {

      if (err) {
        return res.status(500).json(err.message);
      }

      res.json(rows);

    }
  );
};

exports.getPatient = (req, res) => {

  getPatientPrescriptions(
    req.user.id,
    (err, rows) => {

      if (err) {
        return res.status(500).json(err.message);
      }

      res.json(rows);

    }
  );
};

exports.update = (req, res) => {

  const { medicine, dosage, notes } = req.body;

  updatePrescription(
    req.params.id,
    medicine,
    dosage,
    notes,
    function (err) {

      if (err) {
        return res.status(500).json(err.message);
      }

      res.json({
        message: "Prescription Updated",
      });

    }
  );
};