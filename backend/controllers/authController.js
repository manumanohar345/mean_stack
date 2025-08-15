const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create and save user
    const newUser = new User({ email, password }); // password will be hashed via pre-save hook
    await newUser.save();

    const token = jwt.sign({ id: newUser._id, email: newUser.email }, JWT_SECRET, { expiresIn: '1h' });

    return res.status(201).json({
      message: 'User registered successfully', token,
      user: { id: newUser._id, email: newUser.email }
    });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid email or password' });

    // 🔐 Generate a token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' } // optional expiration
    );

    // Token logic could go here
    return res.status(200).json({ message: 'Login successful', token, user: { id: user._id, email: user.email } });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};
