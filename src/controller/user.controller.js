let usersArray = [];

const addNewUser = (req, res) => {
  try {
    const currentUser = req.body;
    if (!currentUser?.username)
      return res.status(401).json({ message: "Username cannot be empty" });
    if (!currentUser?.email)
      return res.status(401).json({ message: "Email cannot be empty" });
    if (!currentUser?.password)
      return res.status(401).json({ message: "Password cannot be empty" });

    if (currentUser?.password.length < 8 || currentUser?.password.length > 16)
      return res.status(401).json({
        message:
          "Password length should be greater than 8 or less than or equal to 16",
      });

    // Checking if the email is the same as before
    const check = usersArray.find((user) => user.email === currentUser.email);

    if (check)
      return res
        .status(403)
        .json({ message: "A user with the same email already exists" });

    usersArray.push(currentUser);

    return res.status(201).json({
      message: "User created sucessfully",
      data: currentUser,
      allUsers: usersArray,
    });
  } catch (er) {
    return res
      .status(500)
      .json({ mesage: "internal server error", error: er.message });
  }
};

module.exports = { addNewUser };
