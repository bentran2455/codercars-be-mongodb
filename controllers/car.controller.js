const mongoose = require("mongoose");
const Car = require("../models/Car");
const carController = {};

carController.createCar = async (req, res, next) => {
  try {
    // YOUR CODE HERE
    const { make, model, release_date, transmission_type, size, style, price } =
      req.body;
    const results = await Car.create({
      make,
      model,
      release_date,
      transmission_type,
      size,
      style,
      price,
    });
    // console.log(">>> success", results);
    res.json({
      message: "Create Car Successfully!",
      cars: results,
    });
  } catch (err) {
    // YOUR CODE HERE
    res.status(404).json({
      error: err,
      message: "Cannot create the car, please check again the information",
    });
  }
};

carController.getCars = async (req, res, next) => {
  let getCars = [];
  try {
    // YOUR CODE HERE
    const page = req.query.page;
    const results = await Car.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .skip(10 * page);
    getCars = [...results];
    console.log(getCars);
    res.json({
      message: "Get Car List Successfully!",
      cars: getCars,
      page: page,
      total: getCars.length,
    });
  } catch (err) {
    res.status(404).json({
      message: "Cannot find requested resource",
    });
  }
};

carController.editCar = async (req, res, next) => {
  const { make, model, release_date, transmission_type, size, style, price } =
    req.body;
  try {
    // YOUR CODE HERE
    const results = await Car.findByIdAndUpdate(req.params.id, {
      make,
      model,
      release_date,
      transmission_type,
      size,
      style,
      price,
    });
    res.json({
      message: "Update Car List Successfully!",
      cars: results,
    });
  } catch (err) {
    // YOUR CODE HERE
    res.status(404).json({
      message: "Cannot find requested resource",
    });
  }
};

carController.deleteCar = async (req, res, next) => {
  try {
    const deletedCar = await Car.findOneAndUpdate(
      { _id: req.params.id },
      { isDeleted: true },
      { new: true }
    );
    if (!deletedCar || deletedCar.isDeleted) {
      return res.status(400).json({
        message: "Error: Car not found",
      });
    }
    return res.status(200).json({
      message: "Delete car successfully",
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

carController.searchCar = async (req, res, next) => {
  try {
    const searchCar = await Car.find({ make: req.query.name })
      .limit(10)
      .skip(10 * req.query.page);
    if (!searchCar || searchCar.length === 0) {
      return res.status(400).json({
        message: "Car not found",
      });
    }
    return res.status(200).json({
      message: "Search completed",
      cars: searchCar,
      page: req.query.page,
      total: searchCar.length,
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = carController;
