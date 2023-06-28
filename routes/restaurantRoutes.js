const express = require("express");

const restaurantController = require("../controllers/restaurant.controllers");

const authMiddleware = require("../middlewares/auth.middleware");
const restaurantMiddleware = require("../middlewares/restaurant.middleware");

const router = express.Router();

router
  .route("/")
  .get(restaurantController.findAll)
  .post(restaurantController.create);

router
  .use("/:id", restaurantMiddleware.existRestaurant)
  .route("/:id")
  .get(restaurantController.findOne)
  .patch(restaurantController.update)
  .delete(restaurantController.delete);

module.exports = router;
