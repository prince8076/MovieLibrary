const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../modles/user"); // Ensure this path is correct

const generateToken = (id) => {
  return jwt.sign({ id }, "prince", { expiresIn: "30d" });
};

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    const createdUser = await user.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        token: generateToken(createdUser._id),
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide all the required fields" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.status(200).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
