const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");

const {
  create,
  getDoctor,
  getPatient,
  update,
} = require("../controllers/prescriptionController");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("doctor"),
  create
);

router.get(
  "/doctor",
  authMiddleware,
  roleMiddleware("doctor"),
  getDoctor
);

router.get(
  "/patient",
  authMiddleware,
  roleMiddleware("patient"),
  getPatient
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("doctor"),
  update
);

module.exports = router;