const bcrypt = require('bcrypt');
const User = require('../modles/user');

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const user = new User({
            name,
            email,
            password: hashedPassword // Store the hashed password in the database
        });

        await user.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please provide all the required fields" });
    }

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        // Compare the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        res.status(200).json({ message: "User logged in successfully", user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
};
