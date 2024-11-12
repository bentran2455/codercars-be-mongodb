const express = require("express");
const {
  createCar,
  getCars,
  editCar,
  deleteCar,
  searchCar,
} = require("../controllers/car.controller");
const router = express.Router();

// CREATE
router.post("/", createCar);

// READ
router.get("/", getCars);

// UPDATE
router.put("/:id", editCar);

// DELETE
router.delete("/:id", deleteCar);

// SEARCH
router.get("/search", searchCar);

module.exports = router;
