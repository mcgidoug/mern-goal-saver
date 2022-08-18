// @desc    Register new user
// @desc    POST /api/users
// @desc    Public
const registerUser = (req, res) => {
  res.json({ message: "Registered User" });
};

module.exports = {
  registerUser,
};
