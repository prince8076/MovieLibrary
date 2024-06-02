const express = require("express");
const router = express.Router();
const {
  createList,
  getUserLists,
  getListById,
  addFavoriteMovieToList,
} = require("../controllers/listController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, createList).get(protect, getUserLists);

router.route("/:id").get(protect, getListById);

router.route("/favorite").post(protect, addFavoriteMovieToList);

module.exports = router;
