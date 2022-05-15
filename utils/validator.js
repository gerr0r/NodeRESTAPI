function validateUser(userData) {
  const errors = [];
  const {
    firstName, //required
    lastName, // required
    email, //required
    gender = null, // optional
    ipAddress = null, // optional
  } = userData;

  if (!firstName) errors.push("First name is required");
  if (!lastName) errors.push("Last name is required");
  if (!email) errors.push("Email is required");

  if (errors.length) return { success: false, errors };

  return {
    success: true,
    data: {
      firstName,
      lastName,
      email,
      gender,
      ipAddress,
    },
  };
}

module.exports = { validateUser };
