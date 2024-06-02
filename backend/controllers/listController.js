const List = require("../modles/list");

// Create a new list
const createList = async (req, res) => {
  const { name, movies, isPublic } = req.body;
  const list = new List({ name, user: req.user._id, movies, isPublic });
  const createdList = await list.save();
  res.status(201).json(createdList);
};

// Get all lists for a user
const getUserLists = async (req, res) => {
  const lists = await List.find({ user: req.user._id });
  res.json(lists);
};

// Get a list by ID
const getListById = async (req, res) => {
  const list = await List.findById(req.params.id);

  if (list) {
    if (list.isPublic || list.user.toString() === req.user._id.toString()) {
      res.json(list);
    } else {
      res.status(401);
      throw new Error("Not authorized to view this list");
    }
  } else {
    res.status(404);
    throw new Error("List not found");
  }
};

// Add a favorite movie to a list
const addFavoriteMovieToList = async (req, res) => {
  const { listId, favoriteMovie } = req.body;

  try {
    const list = await List.findById(listId);

    if (list) {
      if (list.user.toString() === req.user._id.toString()) {
        list.favoriteMovies.push(favoriteMovie);
        const updatedList = await list.save();
        res.json(updatedList);
      } else {
        res.status(401);
        throw new Error("Not authorized to modify this list");
      }
    } else {
      res.status(404);
      throw new Error("List not found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createList,
  getUserLists,
  getListById,
  addFavoriteMovieToList,
};
